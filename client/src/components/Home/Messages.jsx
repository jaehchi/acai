import React from 'react';
import { graphql } from 'react-apollo';
import { Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';


const Messages = (props) => {
  console.log('mesage', props)
  if ( props.data.loading ) {
    return <h1>Loading...</h1>
  }

  if ( props.data.error ) {
    return <h1>{props.error.message}</h1>
  }
  
  return (
    <div>
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