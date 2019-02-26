import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import DMChannelEntry from '../DMChannelEntry';

import './dmChannelList.sass';

const DMChannelList = ({ channels = [], match }) => {

  return (
    <div>
      <div className="dm__list">Direct Messages</div>
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