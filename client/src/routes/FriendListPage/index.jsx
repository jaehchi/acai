import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { each } from 'lodash';

import FriendList from '../../components/Home/FriendList/index.jsx';
import Loading from '../../components/globals/Loading';

import FRIEND_LIST_QUERY from '../../graphQL/queries/FriendList.graphql';

class FriendListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      variables: {
        filter: 'All'
      }
    }

    this._filterRel = this._filterRel.bind(this);
  }

  async _filterRel (filter) {
    await this.setState({
      variables: {
        filter, 
      }
    })
  }

  render() {
    return (
      <Query query={FRIEND_LIST_QUERY} fetchPolicy='cache-first' variables={this.state.variables}>
        {
          ({ loading, error, refetch, data: { getAllRelations } }) => {
            if ( loading ) { 
              return <Loading/> 
            }

            if ( error ) { return <div>{error}</div> }

            const relations = getAllRelations

            return (
              <FriendList relations={relations} requests={getAllRelations.length - relations.length} refetch={refetch} filterRel={this._filterRel}/>
            )
          }
        }
      </Query>
    );
  }
}

export default FriendListPage;