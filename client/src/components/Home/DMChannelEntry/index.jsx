import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import MemberEntry from '../MemberEntry';
import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';

// import './channelEntry.sass';

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
    
    const path = `${match.url}/${id}`;
    const to = recipients.find( user => ( user.id !== localStorage._id ))
  
    return (
      <div key={id}>
        <NavLink to={path} className="" activeClassName="" onMouseOver={this.prefetchMessages}>
          <MemberEntry member={to}/>
        </NavLink>
      </div>
    );
  }
};


export default withApollo(DMChannelEntry);