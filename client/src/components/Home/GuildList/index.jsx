import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Guild from '../Guild';

const signupmutation = gql`
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
`

class GuildList extends Component {
  render() {
    
    const variables = {
      email: 'ffff@gmail.com',
      username: 'ffff',
      password: 'mango'
    }
    return (
      <Mutation mutation={signupmutation} variables={variables}>
        { asdf => <button onClick={asdf}>Submit</button>}
      </Mutation>

    )
  }
}

export default GuildList;