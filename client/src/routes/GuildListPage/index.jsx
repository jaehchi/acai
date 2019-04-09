import React, { Component }from 'react';
import { Query } from 'react-apollo';

import GuildList from '../../components/Home/GuildList';
import Loading from '../../components/globals/Loading';
import AddGuild from '../../components/Modals/AddGuild';
import Me from '../../components/Home/Me';

import GUILD_LIST_QUERY from '../../graphQL/queries/GuildList.graphql';

import './guildList.sass';

const  GuildListPage = (props) => {
  return (
    <div className="guildList" onContextMenu={(e) => { e.preventDefault()} }>
      <Me/>
      <Query query={GUILD_LIST_QUERY}>
        { ({ loading, data }) => (
          <div>
            <GuildList guilds={data.guilds || []}/>
            {loading ? <Loading /> : null}
          </div>
        )}
      </Query>
      <AddGuild/>
    </div>
  )
}

export default GuildListPage;
