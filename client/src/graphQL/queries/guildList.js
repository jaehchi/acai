import gql from 'graphql-tag';

export const fetchGuildsQuery = gql`
  query {
    user {
      id
      username
      email
      
      memberOf {
        id
        guildname
        avatar
        
        channels {
          id
          channelname
          
          messages {
            id
            author {
              id
              username
              avatar
            }
            content
            createdAt
          }
        }
      }
    }
  }
`;