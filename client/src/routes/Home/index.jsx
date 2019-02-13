import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import GuildListPage from '../GuildListPage';
import ChannelListPage from '../ChannelListPage';
import DMPage from '../DMPage';
import FeedPage from '../FeedPage';


import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props; 

    console.log(match)
    const content = match.path === `/channels/@me` ? (
        <div id="home">
          <GuildListPage/>
          <Route path={`/channels/@me`} component={ChannelListPage}/>
          {/* <Route path={`channels/@me/:channel_id`} component={DMFeedPage}/> */}  
        </div>
      ) : ( 
        <div id="home">
          <GuildListPage/>
          <Route path={`/channels/:guild_id/`} component={ChannelListPage}/>
          <Route path={`/channels/:guild_id/:channel_id`} component={FeedPage}/>  
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