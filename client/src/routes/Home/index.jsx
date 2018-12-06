import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GuildListPage from '../GuildListPage';
import ChannelListPage from '../ChannelListPage';
import FeedPage from '../FeedPage';
import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if ( this.props.match.path === '/channels/:guild_id/:channel_id') {
      return (
        <div id="home">
          <GuildListPage/>
          <Route path={`/channels/:guild_id/`} component={ChannelListPage}/>
          <Route path={`/channels/:guild_id/:channel_id`} component={FeedPage}/>
        </div>
      );
    } else {
      return (
        <div id="home">
          <GuildListPage/>
          {/* <Route path={`channels/@me/:channel_id`} component={DirectMessages}/>
          <Route path={`channels/@me/:channel_id`} component={DirectMessages}/> */}
        </div>
      )
    }
  }
};

export default Home;