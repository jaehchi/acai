import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import GuildList from './Home/GuildList';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuildList></GuildList>
    );
  }
}

