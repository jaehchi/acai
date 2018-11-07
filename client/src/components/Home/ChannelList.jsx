import React from 'react';
import { graphql } from 'react-apollo';
import { Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';

import Messages from './Messages';

const ChannelList = (props) => {

  if ( props.data.loading ) {
    return <h1>Loading...</h1>
  }

  if ( props.data.error ) {
    return <h1>{props.data.error.message}</h1>
  }
  
  return (
    <div>
      <h1>ChannelList</h1>
      <ul>
        {props.data.allChannels.map(({ id, channelname }) => (
          <li key={id}>
            <Link to={`${props.match.url}/${id}`}>{channelname}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${props.match.path}/:channelId`} component={Messages}/>
    </div>
  );
}
const query = gql`
    query ($id: ID!) {
      allChannels(id: $id) {
        id
        channelname
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