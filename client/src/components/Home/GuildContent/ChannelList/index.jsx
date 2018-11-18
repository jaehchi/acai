import React from 'react';

import Channel from '../Channel';

import './channelList.sass';

const ChannelList = ({ channels, match }) => {
  return (
    <ul className="channels">
      {
        channels.map((channel) => (
          <Channel 
            key={channel.id}
            channel={channel}
            match={match}
          />
        ))
      }
    </ul>
  );
};

export default ChannelList