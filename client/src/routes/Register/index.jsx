import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import registerMutation  from '../../graphQL/register.graphql';

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

  async register (e) {
    e.preventDefault();

    try {
      const { data: { signup }} = await this.props.mutate({
        variables: this.state
      });

      await this._saveUserData(signup);
      this.props.history.push('/home');

    } catch (e) {
      console.log(e);
    }
  }

  async _saveUserData ({ token, user }) {
    localStorage.access_token = token;
    localStorage.user = user;
  }

  render() {
    return (
      <div id="register" >
        <form className="r-authBox" onSubmit={this.register}>
          <div className="r-wrapper">
            <div className="r-title">Create an account</div>
            <div className="r-input">
              <h5>email</h5>
              <input
                type="text"
                name="email"
                onChange={this.onChange}
              />
            </div>
            <div className="r-input">
              <h5>username</h5>
              <input
                type="text"
                name="username"
                onChange={this.onChange}
              />
            </div>
            <div className="r-input">
              <h5>password</h5>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
              />
            </div>
            <button className="r-button" onClick={this.register}>Continue</button>
            <Link className="r-redirect" to="/login" href="/login">Already have an account?</Link>
            <div className="r-tos">By registering, you agree to Acai's nonexistent Terms of Service and Privacy Policy.</div>
          </div>
        </form>
        
      </div>
    );
  }
}

export default graphql(registerMutation)(Register); 