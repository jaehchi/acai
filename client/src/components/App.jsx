import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Landing/>
      </div>
    );
  }
}

