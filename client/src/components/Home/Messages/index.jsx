import React from 'react';
import { graphql } from 'react-apollo';

import gql from 'graphql-tag';


const Messages = (props) => {
  
  if ( props.data.loading ) {
    return <h1>Loading...</h1>
  }

  if ( props.data.error ) {
    return <h1>{props.error.message}</h1>
  }
  
  return (
    <div>
      <h1>{props.data.allMessages.length ? props.data.allMessages[0].channel.channelname: null}</h1>
      {props.data.allMessages.map(({id, content, createdAt, author }) => (
        <div key={id} className="">
          <p>{content}</p>
          <p>{author.id}</p>
        </div>
      ))}
    
    </div>
  );
}

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

        channel {
          channelname
        }
      }
    }
  
`;


export default graphql(query, {
  options: (props) => ({
    variables: {
      id: props.match.params.channelId
    } 
  })
})(Messages);