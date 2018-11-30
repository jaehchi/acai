import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token 
      user {
        id
        lastSeenOn

        memberOf {
          id
          name
          
          channels {
            id
            name
          }
        }
      
      }
    }
  }
`;
