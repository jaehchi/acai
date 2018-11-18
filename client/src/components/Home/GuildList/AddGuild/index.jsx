import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Modal from '../../../globals/Modal';
import CreateServer from './CreateServer';
import AddServerOptions from './AddServerOptions';

import './addGuild.sass';
import '../GuildItem/guildItem.sass'

class AddGuild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      switchModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.switchModal = this.switchModal.bind(this);
  }

  toggleModal (e) {
    if (this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal
    });
  }

  switchModal () {
    this.setState({
      switchModal: !this.state.switchModal
    });
  }

  render() {
    
    const modal = this.state.showModal ? (
      <Modal>
        <div className="add-server-wrapper" onClick={this.toggleModal}>
          <div className="add-server-container" ref={ node => { this.node = node; }}>
            { 
              this.state.switchModal ? 
                <CreateServer switchModal={this.switchModal}/> : <AddServerOptions switchModal={this.switchModal}/>
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
        {modal}
      </div>
    );
  }
}

export default AddGuild;