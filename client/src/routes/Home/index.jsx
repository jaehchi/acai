import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import GuildListPage from '../GuildListPage';
import ChannelListPage from '../ChannelListPage';
import DMListPage from '../DMListPage';
import DMFeedPage from '../DMFeedPage';
import FeedPage from '../FeedPage';

import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props; 
    const friends = !this.props.match.params.channel_id ? <div>friends list</div> : null

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