import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Mutation  } from 'react-apollo';

import SVG from '../../globals/SVG';
import RemoveFriend from '../../Modals/RemoveFriend';

import ADD_DM_CHANNEL_MUTATION from '../../../graphQL/mutations/addDMChannel.graphql';
import UPDATE_RELATION_MUTATION from '../../../graphQL/mutations/updateRelation.graphql';


import './friendEntry.sass';

class FriendEntry extends Component {
  constructor(props) {
    super(props);

    this.handleServerClick = this.handleServerClick.bind(this);
    this.__createFriendAction = this._createFriendAction.bind(this);
    this._handlePendingActionsClick = this._handlePendingActionsClick.bind(this);
  }

  _handlePendingActionsClick (e, mutation) {
    e.preventDefault();
    e.stopPropagation();
    mutation();
  }

  handleServerClick (e, guild) {
    e.preventDefault();
    this.props.history.push(`/channels/${guild.id}/${guild.channels[0].children[0].id}`);
  }

  _createFriendAction (id, status, action_id, link) {
    if ( status === 'Pending' ) {
      return (
        <div className="pending__actions">
          { 
            action_id !== localStorage._id ? <div className="pending__action pending__accept">
              <Mutation 
                mutation={UPDATE_RELATION_MUTATION} 
                variables={{ id, action: 1 }} 
                update={ (store, { data: { updateRelation } }) => {
                  this.props.updateStoreAfterUpdatingRelation( store, updateRelation );
                  this.props.refetch({ filter: 'All'});
                }}
              >
                { (updateRelationMutation) => ( 
                  <div onClick={(e) => { this._handlePendingActionsClick(e, updateRelationMutation)}}>
                    <SVG name="checkmark" height={"24px"} weight={"24px"} viewBox={"0 0 24 24"} fill={"currentColor"}/>
                  </div>
                )}
              </Mutation>
            </div> : null
          }
          <div className="pending__action pending__decline">
            <Mutation 
              mutation={UPDATE_RELATION_MUTATION} 
              variables={{ id, action: 3 }} 
              update={ (store, { data: { updateRelation } }) => {
                this.props.updateStoreAfterUpdatingRelation( store, updateRelation );
              }}
            >
              { (updateRelationMutation) => ( 
                <div onClick={(e) => { this._handlePendingActionsClick(e, updateRelationMutation)}}>
                  <SVG name="cross" height={"20px"} weight={"20px"} viewBox={"0 0 24 24"} fill={"currentColor"}/>
                </div>) }
            </Mutation>
          </div>  
        </div>
      )
    } else if ( status === 'Accepted' ) {
      const payload = {
        id, 
        status,
        link: link[0]
      }
      return (
        <div className="pending__actions">
          <div className="pending__action pending__remove">
            <RemoveFriend relation={payload} updateStoreAfterDeletingRelation={this.props.updateStoreAfterDeletingRelation}/>
          </div>
        </div>
      );
    } else if ( status === 'Blocked') {
      const payload = {
        id, 
        status,
        link: link[0]
      }
      return ( 
        <div className="pending__actions">
          <div className="pending__action pending__remove">
            <RemoveFriend relation={payload} updateStoreAfterDeletingRelation={this.props.updateStoreAfterDeletingRelation}/>
          </div>
        </div>
      );
    }
  }

  render() {
    const { relation: { id, status, link, action_id }, match } = this.props;

    const path = `${match.path}/${link[0].dmChannels[0].id}`
    const stat = (status === 'Pending') ? ( (action_id === localStorage._id) ? 'Outgoing Friend Request' : 'Incoming Friend Request' ) : status;

    const avatar = link[0].avatar[0] !== '#' ? (
      <img src={`http://localhost:3100/${link[0].avatar}`}/> 
    ) : (
      <div className="friend-default-avatar">
        <SVG height={"35px"} width={"35px"} viewBox={"0 -15 512 512"} style={{ backgroundColor: link[0].avatar, borderRadius: "50%" }}/>
      </div>
    );

    
    const friendRelation = (
      <Mutation
        mutation={ADD_DM_CHANNEL_MUTATION} 
        variables={{ id: link[0].dmChannels[0].id}}
        update={(store, { data: { addDMChannel } }) => {
          this.props.updateStoreAfterAddingActiveDM( store, addDMChannel )
        }}
      >
        { (addDMChannelMutation) => (
          <div>
            <NavLink to={path}>
              <div onClick={addDMChannelMutation}>
                <div className="friend__content">
                  <div className="friend__username"> 
                    { avatar }
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
                  { this.__createFriendAction(id, status, action_id, link) }
                </div>
              </div>
            </NavLink> 
          </div>
          )
        }
      </Mutation>
    );

  
  
    return (
      <div id="friend__entry">
        {friendRelation}
      </div>
    );
  }
}

export default withRouter(FriendEntry);