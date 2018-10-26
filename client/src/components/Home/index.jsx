import React, { Component } from 'react';

import GuildList from './GuildList'

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
}

export default Home;