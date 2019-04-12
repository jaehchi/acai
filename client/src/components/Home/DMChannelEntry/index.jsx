import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { withApollo, Mutation } from 'react-apollo';
import { propType } from 'graphql-anywhere';

import REMOVE_DM_CHANNEL_MUTATION from '../../../graphQL/mutations/RemoveDMChannel.graphql';
import DM_CHANNEL_LIST_QUERY from '../../../graphQL/queries/DMChannelList.graphql'

import MemberEntry from '../MemberEntry';
import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';

import './dmChannelEntry.sass';

class DMChannelEntry extends Component {
  constructor(props) {
    super(props);

    this.prefetchMessages = this.prefetchMessages.bind(this);
  }

  async prefetchMessages () {
    const { channel: { id }, client } = this.props;
    const data = await client.query({
      query: MESSAGE_LIST_QUERY,
      variables: { id },
    });
  };

  render() {
    const { 
      channel: { id, recipients },
      match 
    } = this.props;
    
    const path = `${match.path}/${id}`;
    const member = recipients.find( user => ( user.id !== localStorage._id ));
    
    const DM = id ? (
      <Mutation 
        mutation={REMOVE_DM_CHANNEL_MUTATION} 
        variables={{ id,  }}
        update={(store, { data: { removeDMChannel }}) => {
          const data = store.readQuery({
            query: DM_CHANNEL_LIST_QUERY,
          });

          data.user.activeDMs = data.user.activeDMs.filter((dm) => { return dm.id !== removeDMChannel.id }); 

          store.writeQuery({ query: DM_CHANNEL_LIST_QUERY, data });


          if ( this.props.history.location.pathname === `/channels/@me/${removeDMChannel.id}`) {
            this.props.history.push(`/channels/@me/`); 
          }
          
        }}
      >
        {(removeDMChannelMutation) => ( <div className="remove__dms" onClick={(e) =>{ e.preventDefault(); removeDMChannelMutation()}}>x</div> )}
      </Mutation>
    ) : null;

    return (
      
      <div key={id}>
        <NavLink to={path} className="dm__entry" activeClassName="dm-active" onMouseOver={this.prefetchMessages}>
          <MemberEntry member={member} dm={id}/>
          { DM }
        </NavLink>
      </div>
    );
  }
};


export default withApollo(withRouter(DMChannelEntry));