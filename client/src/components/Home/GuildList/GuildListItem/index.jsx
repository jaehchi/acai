import React from 'react';
import { Link } from 'react-router-dom';

import './guildListItem.sass';

const GuildListItem = ({ guild }) => {

  const payload = {
    pathname: "/contents",
    state: guild
  }

  return (
    <div>
      <Link to={payload}>
        <img src={guild.avatar} alt="" className='asdf'/>
      </Link>
    </div>
  )
}

export default GuildListItem;