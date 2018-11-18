
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelNav from './ChannelNav/index';
import ChannelList from './ChannelList';

import './guildContent.sass';

const GuildContent = ({ data: { loading, error, channels }, match }) => {
  
  if ( loading ) {
    return <h1>Loading...</h1>
  }
  
  if ( error ) {
    return <h1>{error.message}</h1>
  } 

  return (
    <div className="guild-content">
      <ChannelNav name={channels[0].belongsTo.name}/>
      <ChannelList channels={channels} match={match}/>
    </div>
  );
}
const query = gql`
    query ($id: ID!) {
      channels(id: $id) {
        id
        name

        belongsTo {
          name

          owner { 
            id
            username
          }
        }
      }
    }
  
`;

export default graphql(query, {
  options: ({ match: { params: { guildId }}}) => ({
    variables: {
      id: guildId
    } 
  })
})(GuildContent);