import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Mutation, withApollo } from 'react-apollo';

import SVG from '../../globals/SVG';

import DM_CHANNEL_LIST_QUERY from '../../../graphQL/queries/DMChannelList.graphql';
import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';
import ADD_DM_CHANNEL_MUTATION from '../../../graphQL/mutations/addDMChannel.graphql';
import UPDATE_RELATION_MUTATION from '../../../graphQL/mutations/updateRelation.graphql';

import './friendEntry.sass';

class FriendEntry extends Component {
  constructor(props) {
    super(props);

    this.handleServerClick = this.handleServerClick.bind(this);
  }


  handleServerClick (e, guild) {
    e.preventDefault();
    this.props.history.push(`/channels/${guild.id}/${guild.channels[0].children[0].id}`);
  }

  render() {
  
    const { relation: { id, status, link, action_id }, match } = this.props;

    const path = `${match.path}/${link[0].dmChannels[0].id}`
    const stat = (status === 'Pending') ? ( (action_id === localStorage._id) ? 'Outgoing Friend Request' : 'Incoming Friend Request' ) : status;

    
    const friendActions = (status === 'Pending' && action_id !== localStorage._id) ? (
      <div>
        <Mutation mutation={UPDATE_RELATION_MUTATION} variables={{ id, action: 3 }} update={ (store, { data: { updateRelation} }) => {
          const data = store.readQuery({
            query: FRIEND_LIST_QUERY,
            variables: { filter: 'Pending' }    
          });

          const result = data.relations.relations.filter( rel => ( rel.id !== updateRelation.id ));

          store.writeQuery({
            query: FRIEND_LIST_QUERY,
            data: {
              relations: {
                relations: result,
                count: result.length,
                __typename: "RelationPayload" 
              },
            },
            variables: { filter: 'Pending' }    
          });
        }}>
          {(updateRelationMutation) => ( <button onClick={updateRelationMutation}>x</button>)}
        </Mutation>
      </div>
    ) : null;

    const friendRelation = (
      <Mutation
          mutation={ADD_DM_CHANNEL_MUTATION} 
          variables={{ id: link[0].dmChannels[0].id}}
          update={(store, { data: { addDMChannel } }) => {
            const data = store.readQuery({ 
              query: DM_CHANNEL_LIST_QUERY
            });

            const isDMAlreadyActive = data.user.activeDMs.find( DM => ( DM.id === addDMChannel.id ));

            if ( !isDMAlreadyActive ) {
              data.user.activeDMs.push(addDMChannel);

              store.writeData({
                query: DM_CHANNEL_LIST_QUERY,
                data
              });
            }
          }}
        >
          { (addDMChannelMutation) => (
            <div>
              { friendActions }
            
              <NavLink to={path}>
                    
              <div onClick={addDMChannelMutation}>
                <div className="friend__content">
                  <div className="friend__username"> 
                    {
                      link[0].avatar[0] !== '#' ? <img src={`http://localhost:3100/${link[0].avatar}`} /> : <div className="friend-default-avatar" style={{ backgroundColor: link[0].avatar }}>
                       <SVG height={"35px"} width={"35px"} viewBox={"0 -15 512 512"}/>
                      </div>
                    }
                    <div>{link[0].username}</div>
                  </div>
                  <div className={`friend__status__icon ${ stat !== 'Accepted' ? 'Offline' : link[0].status}`}></div>
                  <div className="friend__status">{ stat !== 'Accepted' ? stat : link[0].status }</div>
                  <div className="friend__mutual">
                    {
                      link[0].memberOf.map( guild => { 
                        return (
                          <div key={`mutualGuild/${guild.id}`} onClick={(e) => { this.handleServerClick(e, guild)}}>
                            <img src={`http://localhost:3100/${guild.avatar}`}/>    
                          </div>
                        )
                      })
                    }
                  </div>
          
                </div>
              </div>
          </NavLink> 
            </div>
            )
          }
        </Mutation>
    )

  
  
    return (
      <div id="friend__entry">
        {friendRelation}
      </div>
    );
  }
}

export default withApollo(withRouter(FriendEntry));