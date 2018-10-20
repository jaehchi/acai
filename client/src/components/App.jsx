import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path='/' component={Landing} />
    </Switch>
    );
  }
}

