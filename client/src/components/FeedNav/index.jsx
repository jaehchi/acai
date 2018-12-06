
import React, { Component } from 'react';

import './feedNav.sass';

const FeedNav = (props) => {
  console.log('feedNav', props)
  return (
    <div className="feedNav">
      <div className="hashtag">
        <div className="channelName">{props.name}</div>
      </div>
    </div>
  );
};

export default FeedNav;