import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import GuildList from './GuildList';
import Contents from './Contents';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GuildList/>
        <Switch>
          <Route pathname="/contents" component={Contents}/>
        </Switch>
      
      </div>
    );
  }
}

export default Home;