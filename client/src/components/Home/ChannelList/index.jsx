
import React from 'react';
import { graphql } from 'react-apollo';
import { Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';


import './channelList.sass';

const ChannelList = (props) => {

  if ( props.data.loading ) {
    return <h1>Loading...</h1>
  }

  if ( props.data.error ) {
    return <h1>{props.data.error.message}</h1>
  }

  console.log('hey ', props.data.allChannels[0].belongsTo.owner.id === localStorage._id)
  return (
    <div className="channelList">
      <div>
        {props.data.allChannels[0].belongsTo.guildname}
      </div>
      <h1>Text Channels</h1>
      <ul>
        {
          props.data.allChannels.map(({ id, channelname, type }) => {
            return (

              <li key={id}>
                <Link to={`${props.match.url}/${id}`}># { channelname }</Link>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}
const query = gql`
    query ($id: ID!) {
      allChannels(id: $id) {
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