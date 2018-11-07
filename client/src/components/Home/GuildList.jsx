import React from 'react';
import { graphql } from 'react-apollo';
import { Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';

import ChannelList from './ChannelList';

const GuildList = ({ data: { loading, error, guildlist}}) => {

  if ( loading ) {
    return <h1>Loading...</h1>
  }

  if ( error ) {
    return <h1>{error.message}</h1>
  }
  
  return (
    <div>
      <h1>GuildList</h1>
      <ul>
        {
          guildlist.map(({ id, guildname, channels }) => (
            <li key={id}>
              <Link to={`/${id}/${channels[0].id}`}>{guildname}</Link>
            </li>
          ))
        }
      </ul>

      <hr />

      <Route path={`/:guildId`} component={ChannelList}/>
    </div>
  );
}

const query = gql`
  query {
    guildlist {
      id
      guildname

      channels {
        id
      }
    }
  }
`;

export default graphql(query)(GuildList);