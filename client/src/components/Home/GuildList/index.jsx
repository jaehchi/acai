import React from 'react';
import PropTypes from 'prop-types';

import GuildEntry from '../GuildEntry';


const GuildList = ({ guilds = [] }) => {
  return (
    <div>
      { guilds && guilds.map(guild => ( <GuildEntry key={guild.id} guild={guild}/> )) }
    </div>
  );
};

export default GuildList;