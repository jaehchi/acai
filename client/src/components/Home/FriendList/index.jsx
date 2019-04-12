import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FRIEND_LIST_QUERY from '../../../graphQL/queries/FriendList.graphql';
import Loading from '../../globals/Loading';
import FriendEntry  from '../FriendEntry';
import AddFriend from '../../Modals/AddFriend';


import './friendList.sass';

class FriendList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'All',
    };

    this.handleSortingFriends = this.handleSortingFriends.bind(this);
  }

  async componentDidMount() {
    document.getElementsByClassName('friendlist__navItem')[0].classList.add('friendlist__active');
  }

  async handleSortingFriends (e) {
    const filter = e.target.getAttribute('name');

    this.state.filter !== filter ? 
    document.getElementsByClassName('friendlist__active')[0].classList.remove('friendlist__active') : null;
    e.target.classList.add('friendlist__active');

    await this.setState({
      filter,
    })
  }

  render() {
    return (         
      <div id="friend__list">
        <div className="friend__list__nav">
          <AddFriend/>
          <div className="vert-separator"></div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="All">All</div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Online">Online</div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Pending">
            Pending
            <div className="friendlist__requests">{this.props.count}</div>
          </div>
          <div className="vert-separator"></div>
          <div className="friendlist__navItem" onClick={this.handleSortingFriends} name="Blocked">Blocked</div>
        </div>
        <div className="friendList__content">
          <div className="friendList__infomation">
            <div className="friendList__info">Name</div>
            <div className="friendList__info">Status</div>
            <div className="friendList__info">Mutual Servers</div>
          </div>
          <div className="friend__list">
            <Query query={FRIEND_LIST_QUERY} fetchPolicy='cache-first' variables={{ filter: this.state.filter }}>
              {
                ({ loading, error, refetch, data: { relations }}) => {
                  if ( loading ) { 
                    return <Loading/> 
                  }

                  if ( error ) { return <div>{error}</div> }

                  console.log(relations)

                  return (
                    <div> 
                      { relations.relations.map( relation => ( <FriendEntry key={relation.id} relation={relation}/> )) }
                    </div>
                  )
                }
              }
            </Query>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendList;