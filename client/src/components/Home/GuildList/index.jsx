import React, { Component }from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import GuildItem from './GuildItem';
import AddGuild from './AddGuild';

import './guildList.sass';

class GuildList extends Component {
  constructor(props) {
    super(props);
  }

    

  render() {

    const { data: { loading, error, guilds } } = this.props;

    loading ? <h1>Loading...</h1> : null;
    
    error ? <h1>{error.message}</h1> : null;
    
    console.log(guilds)
    return (
      <div className="guildList">
        {
          guilds && guilds.map( (guild) => (
            <GuildItem key={guild.id} guild={guild}/>
          ))
        }
        <AddGuild/>
      </div>
    )
  }
}

export const allGuildsQuery = gql`
  query {
    guilds {
      id
      name
      avatar 

      channels {
        id
        name

        children {
          id
          name
        }
      }
    }
  }
`;

export default graphql(allGuildsQuery)(GuildList);
