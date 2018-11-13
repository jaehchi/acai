
import React, { Component } from 'react';

import hashtag from '../../../../../public/assets/hashtag.svg';
import './feedNav.sass';

const FeedNav = ({ name }) => {
  return (
    <div className="feedNav">
      <img src={hashtag}/>
      <div className="channelName">{name}</div>
    </div>
  );
};

export default FeedNav;