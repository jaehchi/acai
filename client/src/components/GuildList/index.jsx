import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';

import GuildEntry from '../GuildEntry';
import AddGuildModal from '../AddGuildModal';

const GuildList = ({ guilds = [] }) => {
  return (
    <div>
      {
        guilds && guilds.map(guild => ( <GuildEntry key={guild.id} guild={guild}/> ))
      }
      <AddGuildModal/>
    </div>
  );
};

export default GuildList;