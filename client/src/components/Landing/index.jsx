import React, { Component } from 'react';

import Signup from './Signup';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Signup/>
      </div>
    );
  }
}

export default Landing;