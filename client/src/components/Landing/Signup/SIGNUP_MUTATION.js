import gql from 'graphql-tag';
export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $username: String!, $password: String!) {
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