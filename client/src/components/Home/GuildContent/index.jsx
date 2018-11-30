
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelNav from './ChannelNav/index';
import ChannelList from './ChannelList';

import './guildContent.sass';

const GuildContent = ({ data: { loading, error, categories }, match }) => {
  
  if ( loading ) {
    return <h1>Loading...</h1>
  }
  
  if ( error ) {
    return <h1>{error.message}</h1>
  } 

  return (
    <div className="guild-content">
      <ChannelNav name={categories[0].belongsTo.name}/>
      <ChannelList categories={categories} match={match}/>
    </div>
  );
}
const categoriesQuery = gql`
    query ($id: ID!) {
      categories(id: $id) {
        id
        name
        type

        belongsTo {
          name

          owner { 
            id
            username
          }
        }

        channels {
          id
          name
          type
        }
      }
    }
  
`;

export default graphql(categoriesQuery, {
  options: ({ match: { params: { guildId }}}) => ({
    variables: {
      id: guildId
    } 
  })
})(GuildContent);