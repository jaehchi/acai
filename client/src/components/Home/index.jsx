import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GuildList from './GuildList';
import GuildContent from './GuildContent';
import Feed from './Feed';
import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <GuildList/>
        <Route path={`/:guildId`} component={GuildContent}/>
        <Route path={`/:guildId/:channelId`} component={Feed}/>
      </div>
    );
  }
};

export default Home;