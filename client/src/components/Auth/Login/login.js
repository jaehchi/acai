import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token 
      user {
        id

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
