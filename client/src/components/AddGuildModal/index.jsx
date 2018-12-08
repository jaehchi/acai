import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Modal from '../globals/Modal';
import CreateServerModal from '../CreateServerModal';
import JoinServerModal from '../JoinServerModal';
import ServerOptionsModal from '../ServerOptionsModal';

import './addGuild.sass';
import '../GuildEntry/guildEntry.sass';

class AddGuildModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showServerOptions: true,
      showCreateServer: false,
      showJoinServer: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.joinModal = this.joinModal.bind(this);
    this.createModal = this.createModal.bind(this);
  }

  toggleModal (e) {
    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal,
      showServerOptions: true,
      showCreateServer: false,
      showJoinServer: false,
    });
  };

  createModal () {
    this.setState({
      showServerOptions: !this.state.showServerOptions,
      showCreateServer: !this.state.showCreateServer
    });
  };

  joinModal () {
    this.setState({
      showServerOptions: !this.state.showServerOptions,
      showJoinServer: !this.state.showJoinServer
    });
  };

  render() {
    const showServerActions = (this.state.showCreateServer && !this.state.showJoinServer) ? (
      <CreateServerModal createModal={this.createModal} toggleModal={this.toggleModal}/>
    ) : ( 
      <JoinServerModal joinModal={this.joinModal} toggleModal={this.toggleModal}/>
    );

    const showServerOptions = <ServerOptionsModal joinModal={this.joinModal} createModal={this.createModal}/> 
  
    const showModal = this.state.showModal ? (
      <Modal>
        <div className="add-server-wrapper" onClick={this.toggleModal}>
          <div className="add-server-container" ref={ node => { this.node = node; }}>
            { 
              this.state.showServerOptions ? showServerOptions : showServerActions
            }
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="guildItem">
        <div className="addGuild" onClick={this.toggleModal}>
          <span>+</span>
        </div>
        {showModal}
      </div>
    );
  };
}

export default AddGuildModal;