import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation RegisterMutation($email: String!, $username: String!, $password: String!) {
    signup(email: $email, username: $username, password: $password) {
      token 
      user {
        id
        username
        email
      }
    }
  }
`;
