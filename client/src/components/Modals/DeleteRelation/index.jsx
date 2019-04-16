import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import DELETE_RELATION_MUTATION from '../../../graphQL/mutations/DeleteRelation.graphql';

import './deleteRelation.sass';

class DeleteRelation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, link } = this.props.relation;

    const deleteRelation = (
      <Mutation 
        mutation={DELETE_RELATION_MUTATION} 
        variables={{ id, }}
        update={(store, { data: { deleteRelation } }) => {
          this.props.updateStoreAfterDeletingRelation(store, deleteRelation, this.props.toggleModal);
        }}
      >
        { deleteRelationMutation => ( <button onClick={deleteRelationMutation} className='dr-delete'>Remove Friend</button> )}
      </Mutation>
    );

    return (
      <div id="delete__relation">
        <div className="dr-header">
          <h1>Remove '{ link.username }'</h1>
          <p>Are you sure you want to permanently remove <strong>{ link.username }</strong> from your friends?</p>
        </div>
        <div className="dr-footer">
          <button className="dr-cancel" onClick={() => { this.props.toggleModal();}}>
            <span>Cancel</span>
          </button>
          { deleteRelation }
        </div>
      </div>
    );
  }
}

export default DeleteRelation;