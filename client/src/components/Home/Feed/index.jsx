import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FeedNav from './FeedNav';
import AddMessage from './AddMessage';
import MessageList from './MessageList';

import './feed.sass';

const Feed = (props) => {
  
  if ( props.data.loading ) {
    return <h1>Loading...</h1>
  }

  if ( props.data.error ) {
    return <h1>{props.error.message}</h1>
  }
  

  return (
    <div className="feed">
      <FeedNav name={props.data.channel.name} />
      <MessageList messages={props.data.allMessages}/>
      <AddMessage channel={props.data.channel}/>
    </div>
  );
};

const query = gql`
    query ($id: ID!) {
      allMessages(id: $id) {
        id
        content
        createdAt

        author {
          id
          username
          avatar
        }
      },
      channel(id: $id) {
        id
        name
      }
    }

`;

export default graphql(query, {
  options: (props) => ({
    variables: {
      id: props.match.params.channelId
    } 
  })
})(Feed);