import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GuildList from './GuildList';
import ChannelList from './ChannelList';
import Messages from './Messages';
import './home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <GuildList/>
        <Route path={`/:guildId`} component={ChannelList}/>
        <Route path={`/:guildId/:channelId`} component={Messages}/>
      </div>
    );
  }
};

export default Home;