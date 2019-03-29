import React, { Component } from 'react';
import { withApollo } from 'react-apollo';

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
      filter: 'All',
      relations: this.props.relations
    };

    this.handleSortingFriends = this.handleSortingFriends.bind(this);
  }

  componentDidMount() {
    document.getElementsByClassName('friendlist__navItem')[0].classList.add('friendlist__active');
  }

  async handleSortingFriends (e) {
    const filter = e.target.getAttribute('name');

    this.state.filter !== filter ? 
    document.getElementsByClassName('friendlist__active')[0].classList.remove('friendlist__active') : null;
    e.target.classList.add('friendlist__active');

    const { data: { getAllRelations } } =  await this.props.client.query({
      query: FRIEND_LIST_QUERY,
      variables: { filter }
    });

    this.setState({ 
      relations: getAllRelations,
      filter,
    });
  }

  render() {

    return (         
      <div id="friend__list">
        <div className="friend__list__nav">
          <AddFriend/>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="All">All</div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Online">Online</div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Pending">Pending</div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Blocked">Blocked</div>
        </div>
        <div className="friendList__content">
          <div className="friendList__infomation">
            <div className="friendList__info">Name</div>
            <div className="friendList__info">Status</div>
            <div className="friendList__info">Mutual Servers</div>
          </div>
          <div className="friend__list">
            { this.state.relations.map( relation => ( <FriendEntry key={relation.id} relation={relation}/> )) }
          </div>
        </div>
      </div>
    );
  }
}

export default withApollo(FriendList);