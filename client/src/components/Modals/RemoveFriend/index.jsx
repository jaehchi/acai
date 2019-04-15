import React, { Component } from 'react';

import Modal from '../../globals/Modal';
import DeleteRelation from '../DeleteRelation';
import SVG from '../../globals/SVG';

import './removeFriend.sass'

class RemoveFriend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal (e) {
    if ( e) {
      e.preventDefault();
    }

    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal,
    });
  };


  render() {
    const { relation } = this.props;

    const showModal = this.state.showModal ? (
      <Modal>
        <div className="remove-friend-wrapper" onClick={this.toggleModal}>
          <div className="remove-friend-container" ref={ node => { this.node = node; }}>
            <DeleteRelation toggleModal={this.toggleModal} relation={relation} updateStoreAfterDeletingRelation={this.props.updateStoreAfterDeletingRelation}/>/>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="removeFriend" onClick={this.toggleModal}>
        <span>
          <SVG name={'removeUser'} width={"20px"} height={"20px"} viewBox={"0 0 328 328"} fill={"currentColor"}/>
        </span>
        {showModal}
      </div>
    );
  };
}

export default RemoveFriend;