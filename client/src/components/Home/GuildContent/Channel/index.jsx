import React from 'react';
import { NavLink } from 'react-router-dom';

import hashtag from '../../../../../public/assets/hashtag.svg';

import './channel.sass';

const Channel = ({ channel: { id, name }, match }) => {
  return (
    <div key={id}>
      <NavLink to={`${match.url}/${id}`} className="channel" activeClassName="active">
        <img className="c-symbol" src={hashtag} alt=""/>
        <div className="c-name">{name}</div>
      </NavLink>
    </div>
  );
};

export default Channel;