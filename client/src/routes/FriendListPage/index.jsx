import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { each } from 'lodash';

import FriendList from '../../components/Home/FriendList/index.jsx';
import Loading from '../../components/globals/Loading';

import PENDING_COUNT_QUERY from '../../graphQL/queries/PendingCount.graphql';

class FriendListPage extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Query query={PENDING_COUNT_QUERY} fetchPolicy='cache-first' variables={{ filter: 'Pending' }}>
        {
          ({ loading, error, refetch, data }) => {
            if ( loading ) { 
              return <Loading/> 
            }

            if ( error ) { return <div>{error}</div> }

            return (
              <div>
                <FriendList count={data.relations.count} />
              </div>
            )
          }
        }
      </Query>
    );
  }
}

export default FriendListPage;