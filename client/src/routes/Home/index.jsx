import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import GuildListPage from '../GuildListPage';
import ChannelListPage from '../ChannelListPage';
import DMListPage from '../DMListPage';
import DMFeedPage from '../DMFeedPage';
import FriendList from '../../components/Home/FriendList/index.jsx';
import FeedPage from '../FeedPage';
import { Query } from 'react-apollo';
import FRIEND_LIST_QUERY from '../../graphQL/queries/FriendList.graphql';
import Loading from '../../components/globals/Loading';

import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props; 
    const friends = !this.props.match.params.channel_id ? <Query query={FRIEND_LIST_QUERY}>
    {
      ({ loading, error, data: { user } }) => {
        if ( loading ) { 
          return <Loading/> 
        }

        if ( error ) { return <div>{error}</div> }
        
        for ( let i = 0; i < user.friends.length; i++ ) {
          user.friends[i].dmChannels = [user.friends[i].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === localStorage._id })})]
          user.friends[i].memberOf = user.memberOf.filter(guild => JSON.stringify(user.friends[i].memberOf).includes(JSON.stringify(guild)));
        }

        return (
          <FriendList friends={user.friends} requests={user.incomingRequests.concat(user.outgoingRequests)}/>
        )
      }
    }
    </Query> : null;



    const content = match.path === `/channels/:guild_id/:channel_id` ? (
      <div id="home">
        <GuildListPage/>
        <Route path={`/channels/:guild_id/`} component={ChannelListPage}/>
        <Route path={`/channels/:guild_id/:channel_id`} component={FeedPage}/>  
      </div>
      ) : ( 
        <div id="home">
          <GuildListPage/>
          <Route path={`/channels/@me`} component={DMListPage}/>
          {friends}
          <Route path={`/channels/@me/:channel_id`} component={DMFeedPage}/>  
        </div>
      );

      return (
        <div>
          {content}
        </div>
      );

  }
};

export default Home;