import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import hashtag from '../../../../../public/assets/hashtag.svg';


const ChannelItem = ({ channel: { id, channelname }, match }) => {
  return (
    <li key={id}>
      <Link to={`${match.url}/${id}`}>
        <img src={hashtag} alt=""/>
        <span>{channelname}</span>
      </Link>
    </li>
  );
};

export default ChannelItem;