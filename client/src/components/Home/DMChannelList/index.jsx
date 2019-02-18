import React, { Component } from 'react';

import DMChannelEntry from '../DMChannelEntry';

const DMChannelList = ({ channels = [], match }) => {
  console.log(channels)
  return (
    <div>
      <div>Direct Messages</div>
      {
        channels && channels.map( channel => (  
          <div key={channel.id}>
            <DMChannelEntry channel={channel} match={match}/>
          </div> 
        ))
      }
    </div>
  )
};

export default DMChannelList;