import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from './SIGNUP_MUTATION';

import Input from '../../globals/Input'

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  onChangeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSignup () {
    const payload = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    return ( 
      <Mutation mutation={SIGNUP_MUTATION} variables={payload}>
        { 
          (signupMutation) => {
            return ( <button onClick={signupMutation}>Submit</button> );
          }
        }
      </Mutation>      
    );
  }

  render() {
    return (
      <div>
          <Input
            name='password'
            type='text'
            placeholder={'enter password'}
            onChange={this.onChangeHandler}
            />
        { this.onSignup() }
      </div>
    );
  }
}

export default Signup;