import gql from 'graphql-tag';

export const fetchGuildsQuery = gql`
  query {
    user {
      memberOf {
        id
        
        guilds {
          id
          guildname
        }
      }
    }
  }
`