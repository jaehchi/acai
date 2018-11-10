
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelItem from './ChannelItem';
import './channelList.sass';



const ChannelList = ({ data: { loading, error, channels }, match}) => {

  if ( loading ) {
    return <h1>Loading...</h1>
  }

  if ( error ) {
    return <h1>{error.message}</h1>
  }
  
  return (
    <div className="channelList">
      <div>
        {channels[0].belongsTo.guildname}
      </div>
      <h1>Text Channels</h1>
      <ul>
        {
          channels.map((channel) => (
            <ChannelItem 
              key={channel.id}
              channel={channel}
              match={match}
            />
          ))
        }
      </ul>

    </div>
  );
}
const query = gql`
    query ($id: ID!) {
      channels(id: $id) {
        id
        channelname

        belongsTo {
          guildname

          owner { 
            id
            username
          }
        }
      }
    }
  
`;

export default graphql(query, {
  options: (props) => ({
    variables: {
      id: props.match.params.guildId
    } 
  })
})(ChannelList);