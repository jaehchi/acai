import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';
import Loading from '../../globals/Loading';
import FriendEntry  from '../FriendEntry';
import AddFriend from '../../Modals/AddFriend';
import FriendRequest from '../FriendRequest';

import './friendList.sass';

class FriendList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'all',
      friends: this.props.friends
    }
  }

  all () {
    this.setState({
      current: 'all'
    })
  }
  change () {
    
    this.setState({ 
      current: 'online',
      friends: this.state.friends.filter(el =>( el.status === 'Online'))
    })
  }
  pending() {
    this.setState({ 
      current: 'pending',
      
    })
  }

  render() {
    return (         
      <div id="friend__list">
        <div className="friend__list__nav">
          <AddFriend/>
          <div onClick={this.all.bind(this)}>ALL</div>
          <div onClick={this.change.bind(this)}>Online</div>
          <div onClick={this.pending.bind(this)}>Pending</div>
        </div>
        <div className="friendList__content">
          <div className="friendList__infomation">
            <div className="friendList__info">Name</div>
            <div className="friendList__info">Status</div>
            <div className="friendList__info">Mutual Servers</div>
          </div>
          <div className="friend__list">
            { this.state.current === 'all' && this.props.friends.map( friend => ( <FriendEntry key={friend.id} friend={friend}/> )) }
            { this.state.current === 'online' && this.state.friends.map( friend => ( <FriendEntry key={friend.id} friend={friend}/> )) }
            { this.state.current === 'pending' && this.props.requests.map( request => (  <FriendRequest key={request.id} request={request}/> ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FriendList;