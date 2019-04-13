import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FriendList from '../../components/Home/FriendList/index.jsx';
import Loading from '../../components/globals/Loading';

import FRIEND_LIST_QUERY from '../../graphQL/queries/FriendList.graphql';
import DM_CHANNEL_LIST_QUERY from '../../graphQL/queries/DMChannelList.graphql';

class FriendListPage extends Component {
  constructor(props) {
    super(props);

    this._updateStoreAfterCreatingRelation = this._updateStoreAfterCreatingRelation.bind(this);
    this._updateStoreAfterUpdatingRelation = this._updateStoreAfterUpdatingRelation.bind(this);
    this._updateStoreAfterAddingActiveDM = this._updateStoreAfterAddingActiveDM.bind(this);
  }

  _updateStoreAfterCreatingRelation ( store, createRelation, toggle ) {
    const data = store.readQuery({
      query: FRIEND_LIST_QUERY,
      variables: { filter: 'Pending' },
    });
    
    store.writeQuery({
      query: FRIEND_LIST_QUERY,
      data: {
        relations: {
          relations: [...data.relations.relations, createRelation],
          count: data.relations.count + 1,
          __typename: "RelationPayload" 
        },
      },
      variables: { filter: 'Pending' }    
    });

    toggle();
  }

  _updateStoreAfterUpdatingRelation ( store, updateRelation ) {
    const variables = { filter: 'Pending' };
  
    const data = store.readQuery({
      query: FRIEND_LIST_QUERY,
      variables,
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
      variables, 
    });
  }

  _updateStoreAfterAddingActiveDM ( store, addDMChannel ) {
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
  }


  render() {
    return (
      <Query query={FRIEND_LIST_QUERY} fetchPolicy='cache-first' variables={{ filter: 'Pending' }}>
        {
          ({ loading, error, refetch, data }) => {
            if ( loading ) { 
              return <Loading/> 
            }

            if ( error ) { return <div>{error}</div> }

            return (
              <div>
                <FriendList 
                  count={data.relations.count} 
                  updateStoreAfterCreatingRelation={this._updateStoreAfterCreatingRelation}
                  updateStoreAfterUpdatingRelation={this._updateStoreAfterUpdatingRelation}
                  updateStoreAfterAddingActiveDM={this._updateStoreAfterAddingActiveDM}
                />
              </div>
            )
          }
        }
      </Query>
    );
  }
}

export default FriendListPage;