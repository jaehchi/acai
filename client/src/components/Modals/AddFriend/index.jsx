import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Modal from '../../globals/Modal';

import SEND_FRIEND_REQUEST_MUTATION from '../../../graphQL/mutations/SendFriendRequest.graphql';

import './addFriend.sass';

class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      username: null
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleModal (e) {
    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }

    this.setState({
      showModal: !this.state.showModal,
    });
  };

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  render() {

    const showModal = this.state.showModal ? (
      <Modal>
        <div className="add-friend-wrapper" onClick={this.toggleModal}>
          <div className="add-friend-container" ref={ node => { this.node = node; }}>
            <div>Add a friend!</div>
            <input name="username" type="text" onChange={this.onChange}/>
            <Mutation mutation={SEND_FRIEND_REQUEST_MUTATION} variables={{ username: this.state.username }}>
              { sendFriendRequestMutation => ( <button onClick={sendFriendRequestMutation} className='cc-create'>Send Request</button> )}
            </Mutation>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div className="">
        <div className="addFriend" onClick={this.toggleModal}>
          <div>Add</div>
        </div>
        {showModal}
      </div>
    );
  };
}

export default AddFriend;