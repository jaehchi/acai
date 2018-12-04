
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelNav from './ChannelNav/index';
import ChannelList from './ChannelList';

import './guildContent.sass';

const GuildContent = ({ data: { loading, error, categories }, match }) => {
  if ( loading ) {
    return (
      <div className="guild-content">
        <h1>Loading...</h1>
      </div>
    );
  }
  
  if ( error ) {
    return (
      <div className="guild-content">
        <h1>error...</h1>
      </div>
    );
  } 

  return (
    <div className="guild-content">
      <ChannelNav name={categories[0].belongsTo.name}/>
      <ChannelList categories={categories} match={match}/>
    </div>
  );
}
export const categoriesQuery = gql`
    query ($id: ID!) {
      categories(id: $id, orderBy: position_ASC) {
        id
        name
        type
        position

        belongsTo {
          name
          owner { 
            id
            username
          }
        }

        children {
          id
          name
          type
          position
        }
      }
    }
`;

export default graphql(categoriesQuery, {
  options: ({ match: { params: { guild_id }}}) => ({
    variables: {
      id: guild_id
    },
  })
})(GuildContent);