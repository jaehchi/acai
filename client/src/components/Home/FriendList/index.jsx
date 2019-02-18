import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';
import Loading from '../../globals/Loading';

class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={FRIEND_LIST_QUERY}>
        {
          ({loading, error, data: { user }}) => {
            if ( loading ) { return <Loading/> }

            if ( error ) { return <div>{error}</div>}
            
            return (
              <div>
                { user.friends.map( friend => ( <div key={friend.id}>{friend.username}</div>))}
              </div>
            )
          }
        }
      </Query>
    );
  }
}

export default FriendList;