import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GuildList from './GuildList';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GuildList/>
      </div>
    );
  }
};

export default Home;