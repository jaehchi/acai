import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Home from './Home';
import Register from './Landing/Register';
import Login from './Landing/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/' component={Landing}/> 
      </Switch>
    );
  }
}

