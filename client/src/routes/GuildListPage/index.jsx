import React, { Component }from 'react';
import { Query } from 'react-apollo';

import GuildList from '../../components/Home/GuildList';
import Loading from '../../components/globals/Loading';

import GUILD_LIST_QUERY from '../../graphQL/queries/GuildList.graphql';

import './guildList.sass';

const  GuildListPage = (props) => {
  return (
    <div className="guildList">
      <Query query={GUILD_LIST_QUERY}>
        { ({ loading, data }) => (
          <div>
            <GuildList guilds={data.guilds || []}/>
            {loading ? <Loading /> : null}
          </div>
        )}
      </Query>
    </div>
  )
}

export default GuildListPage;
