import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import GuildItem from './GuildItem';
import './guildList.sass';

const GuildList = ({ data: { loading, error, guilds }}) => {

  if ( loading ) {
    return <h1>Loading...</h1>
  }

  if ( error ) {
    return <h1>{error.message}</h1>
  }
  
  return (
    <div className="guildList">
      <div className="separator"></div>
      <div className="guilds">
        {
          guilds.map( (guild) => (
            <GuildItem key={guild.id} guild={guild}/>
          ))
        }
      </div>
      <div className="separator"></div>
    </div>
  );
}

const query = gql`
  query {
    guilds {
      id
      guildname
      avatar 

      channels {
        id
      }
    }
  }
`;

export default graphql(query)(GuildList);