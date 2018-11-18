import React from 'react';
import { Link } from 'react-router-dom';

import './guildItem.sass';

const GuildItem = ({ guild: { id, name, avatar, channels }}) => {
  return (
    <div className="guildItem">
      <Link to={`/${id}/${channels[0].id}`}>
        <div className="g-avatar">
          {
            avatar ? <img src={avatar}/> : <span>{name[0]}</span>
          }
        </div>
      </Link>
    </div>
  )
};

export default GuildItem;