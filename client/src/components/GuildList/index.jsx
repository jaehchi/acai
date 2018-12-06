import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';

import GuildEntry from '../GuildEntry';
import AddGuild from '../AddGuild';

const GuildList = ({ guilds = [] }) => {
  return (
    <div>
      {
        guilds && guilds.map(guild => ( <GuildEntry key={guild.id} guild={guild}/> ))
      }
      <AddGuild/>
    </div>
  );
};

export default GuildList;