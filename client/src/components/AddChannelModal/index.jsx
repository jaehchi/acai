import React, { Component } from 'react';

import Modal from '../globals/Modal';
import CreateChannelModal from '../CreateChannelModal';


import './AddChannelModal.sass';

class AddChannelModal extends Component {
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
        <div className="add-channel-wrapper" onClick={this.toggleModal}>
          <div className="add-channel-container" ref={ node => { this.node = node; }}>
            <CreateChannelModal id={this.props.id} name={this.props.name} toggleModal={this.toggleModal}/>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="">
        <div className="addChannel" onClick={this.toggleModal}>
          <span>+</span>
        </div>
        {showModal}
      </div>
    );
  };
}

export default AddChannelModal;