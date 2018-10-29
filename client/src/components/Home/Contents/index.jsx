import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ChannelList from './ChannelList';
import Feed from './Feed';



class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ChannelList channels={this.props.location.state.channels} />
        <Switch>
          <Route pathname={`${this.props.match.match}/feed`} component={Feed}/>
        </Switch>
      </div>
    );
  }
}

export default Contents;