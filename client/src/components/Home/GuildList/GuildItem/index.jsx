import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './guildItem.sass';

const GuildItem = ({ guild: { id, guildname, avatar, channels }}) => {
  return (
    <div className="guildItem">
      <Link to={`/${id}/${channels[0].id}`}>
          {
            avatar ? (
              <div className="g-avatar">
                <img src={avatar}/>
              </div>
            )
            : (
            <div className="g-basic-avatar">
              <h1>{guildname[0]}</h1>
            </div>
            )
          }
      </Link>
    </div>
  )
};

export default GuildItem;