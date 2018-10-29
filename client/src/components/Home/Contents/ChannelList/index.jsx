import React, { Component } from 'react';

import ChannelItem from './ChannelItem';

class ChannelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.channels.map( channel => {
            return <ChannelItem channel={channel}/>
          })
        }
      </div>
    );
  }
}

export default ChannelList;