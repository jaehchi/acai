import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import hashtag from '../../../../../public/assets/hashtag.svg';


const ChannelItem = ({ channel: { id, name }, match }) => {
  return (
    <div key={id}>
      <Link to={`${match.url}/${id}`}>
        <img src={hashtag} alt=""/>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default ChannelItem;