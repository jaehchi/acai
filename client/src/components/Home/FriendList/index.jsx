import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';
import Loading from '../../globals/Loading';
import FriendEntry  from '../FriendEntry';

import './friendList.sass';

class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Query query={FRIEND_LIST_QUERY}>
          {
            ({ loading, error, data: { user } }) => {
              if ( loading ) { 
                return <Loading/> 
              }

              if ( error ) { return <div>{error}</div> }
              
              for ( let i = 0; i < user.friends.length; i++ ) {
                user.friends[i].dmChannels = [user.friends[i].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === localStorage._id })})]
                user.friends[i].memberOf = user.memberOf.filter(guild => JSON.stringify(user.friends[i].memberOf).includes(JSON.stringify(guild)));
              }
        
              return (
                <div id="friend__list">
                  <div className="friend__list__nav">Nav</div>
                  <div className="friendList__content">
                    <div className="friendList__infomation">
                      <div className="friendList__info">Name</div>
                      <div className="friendList__info">Status</div>
                      <div className="friendList__info">Mutual Servers</div>
                    </div>
                    <div className="friend__list">
                      { user && user.friends.map( friend => ( <FriendEntry key={friend.id} friend={friend}/> )) }
                    </div>
                  </div>
                </div>
              );
            }
          }
        </Query>

      </div>
    );
  }
}

export default FriendList;