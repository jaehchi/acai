import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { loginMutation } from '../../../mutations/login';

import './login.sass';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async login (e) {
    e.preventDefault();

    const response = await this.props.mutate({
      variables: this.state
    });

    console.log(response)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.onChange}
        />
        <h5 className="">Password</h5>
        <input
          type="password"
          name="password"
          onChange={this.onChange}
        />
        <button onClick={this.login}>Continue</button>
      </div>
    );
  }
}

export default graphql(loginMutation)(Login); 