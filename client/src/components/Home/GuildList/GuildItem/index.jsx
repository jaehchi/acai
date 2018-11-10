import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './guild.sass';

const Guild = ({ guild: { id, guildname, avatar, channels }}) => {
  return (
    <div className="guildItem">
      <Link to={`/${id}/${channels[0].id}`}>
        <div className="g-avatar">
          {
            avatar ? <img src={avatar}/> : <div className="g-basic-avatar">{guildname[0]}</div>
          }
        </div>
      </Link>
    </div>
  )
};

export default Guild;