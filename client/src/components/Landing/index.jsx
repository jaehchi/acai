import React, { Component } from 'react';

import Register from './Register';
import Login from './Login';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Register/>
        <Login/>
      </div>
    );
  }
}

export default Landing;