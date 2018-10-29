import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ChannelItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const payload = {
      pathname: '/contents/feed',
      state: this.props.channel.messages
    }

    console.log(this.props)
    return (
      <div>
        <Link to={payload}>
          # {this.props.channel.channelname}
        </Link>
      </div>
    );
  }
}

export default ChannelItem;