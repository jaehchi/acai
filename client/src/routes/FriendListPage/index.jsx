import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { each } from 'lodash';

import FriendList from '../../components/Home/FriendList/index.jsx';
import Loading from '../../components/globals/Loading';

import FRIEND_LIST_QUERY from '../../graphQL/queries/FriendList.graphql';

class FriendListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={FRIEND_LIST_QUERY} fetchPolicy='cache-first'>
        {
          ({ loading, error, refetch, data: { getAllRelations } }) => {
            if ( loading ) { 
              return <Loading/> 
            }

            if ( error ) { return <div>{error}</div> }

            const relations = getAllRelations.filter( relation => { return relation.status === 'Accepted'});

            return (
              <FriendList relations={relations} requests={getAllRelations.length - relations.length} refetch={refetch}/>
            )
          }
        }
      </Query>
    );
  }
}

export default FriendListPage;