import React from 'react';
import { Link } from 'react-router-dom';

import './guildListItem.sass';

const GuildListItem = (props) => {
  console.log( props )

  return (
    <div>
      <Link to="/" href="/">
        <img src={props.guild.avatar} alt="" className='asdf'/>
      </Link>
    </div>
  )
}

export default GuildListItem;