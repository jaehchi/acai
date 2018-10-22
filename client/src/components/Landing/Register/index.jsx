import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { registerMutation } from '../../../mutations/register';

import './register.sass';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async register () {
    e.preventDefault();

    const { data: { signup } } = await this.props.mutate({
      variables: this.state
    });
  }

  render() {
    return (
      <div>
        <form className="authBox">
          <div className="register-wrapper">
            <h5 className="">Email</h5>
            <div className="">
              <input
                type="text"
                name="email"
                onChange={this.onChange}
              />
            </div>
            <h5 className="">Username</h5>
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
            
            <button onClick={this.register}>Continue</button>
            <div className="">By registering, you agree to acai's nonexistent TOS and Privacy Policy</div>
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(registerMutation)(Register); 