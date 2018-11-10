import React from 'react';
import { graphql } from 'react-apollo';
import { Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';

import './guildList.sass';

const GuildList = ({ data: { loading, error, guildlist}}) => {

  if ( loading ) {
    return <h1>Loading...</h1>
  }

  if ( error ) {
    return <h1>{error.message}</h1>
  }
  
  return (
    <div className="guilds">

      <div className="separator"></div>
      <ul>
        {
          guildlist.map(({ id, guildname, avatar, channels }) => (
            <li key={id} className="guild">
              <Link to={`/${id}/${channels[0].id}`}>
                <img src={avatar}/>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const query = gql`
  query {
    guildlist {
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