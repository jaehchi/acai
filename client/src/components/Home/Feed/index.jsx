import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FeedNav from './FeedNav';
import AddMessage from './AddMessage';
import MessageList from './MessageList';
import Members from './Members';

import './feed.sass';

const Feed = ({ data: { loading, error, channel, allMessages }}) => {
  
  if ( loading ) {
    return <h1>Loading...</h1>
  }

  if ( error ) {
    return <h1>{props.error.message}</h1>
  }
  

  return (
    
    <div className="feed">
      <div className="feed__nav">
        <FeedNav name={channel.name}/>
      </div>
      <div className="feed__content">
        <MessageList messages={allMessages}/>
        <AddMessage channel={channel} />
      </div>
      <div className="feed__members">
        <Members/>
      </div>
    </div>
  );
};

export const AllMessages = gql`
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

export default graphql(AllMessages, {
  options: ({ match: { params: { channel_id }}}) => ({
    variables: {
      id: channel_id
    }
  })
})(Feed);