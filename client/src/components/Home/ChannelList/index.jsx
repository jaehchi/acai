
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelItem from './ChannelItem';
import ChannelNav from './ChannelNav/index';
import './channelList.sass';

const ChannelList = ({ data: { loading, error, channels }, match}) => {
  
  if ( loading ) {
    return <h1>Loading...</h1>
  }
  
  if ( error ) {
    return <h1>{error.message}</h1>
  }
  
  const guildname = channels[0].belongsTo.name; 
  
  return (
    <div className="channelList">
      <ChannelNav name={guildname}/>
      <h5>Text Channels</h5>
      <div>
        {
          channels.map((channel) => (
            <ChannelItem 
              key={channel.id}
              channel={channel}
              match={match}
            />
          ))
        }
      </div>
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
})(ChannelList);