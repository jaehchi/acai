
import React, { Component } from 'react';

import './feedNav.sass';

const FeedNav = ({ name }) => {
  return (
    <div className="feedNav">
      <div className="hashtag">
        <div className="channelName">{name}</div>
      </div>
    </div>
  );
};

export default FeedNav;