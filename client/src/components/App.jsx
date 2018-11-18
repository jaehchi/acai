import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Home from './Home';
import Register from './Auth/Register';
import Login from './Auth/Login';

import './app.sass';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path='/:guildId' component={Home}/>
          <Route path='/' component={Landing}/> 
        </Switch>

      </div>
    );
  }
}

