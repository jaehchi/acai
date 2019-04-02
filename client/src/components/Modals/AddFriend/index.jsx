import React, { Component } from 'react';
import Modal from '../../globals/Modal';
import CreateRelation from '../CreateRelation';

import './addFriend.sass';

class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);

  }

  toggleModal (e) {
    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal,
    });
  };


  render() {
    const showModal = this.state.showModal ? (
      <Modal>
        <div className="add-friend-wrapper" onClick={this.toggleModal}>
          <div className="add-friend-container" ref={ node => { this.node = node; }}>
            <CreateRelation toggleModal={this.toggleModal}/>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="addFriend" onClick={this.toggleModal}>
        <span>Add Friend</span>
        {showModal}
      </div>
    );
  };
}

export default AddFriend;