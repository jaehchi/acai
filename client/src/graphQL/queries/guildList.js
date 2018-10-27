import gql from 'graphql-tag';

export const fetchGuildsQuery = gql`
  query {
    user {
      memberOf {
        id
        guildname
        avatar
      }
    }
  }
`;