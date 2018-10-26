import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

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
    this._saveUserData = this._saveUserData.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value
    });
  }

  async login(e) {
    e.preventDefault();
    
    try {
      const { data: { login } } = await this.props.mutate({
        variables: this.state
      });

      console.log(login);
      await this._saveUserData(login);
      this.props.history.push('/home');
    } catch (e) {
      console.log('Login error: ', e);
    }


  }

  async _saveUserData ({ token, user}) {
    localStorage.access_token = token;
    localStorage._id = user.id
  }

  render() {

    return (
      <div id="login">
        <form className="l-authBox" onSubmit={this.login}>
          <div className="l-wrapper">
            <div className="l-title">
              <div>Welcome Back!</div>
              <div className="l-comment">We're so excited to see you again!</div>
            </div>
            <div className="l-input">
              <h5>email</h5>
              <input
                type="text"
                name="email"
                onChange={this.onChange}
              />
            </div>
            <div className="l-input">
              <h5>password</h5>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
              />
              <div className="l-password">
                <a href="">Forgot your password?</a>
              </div>
            </div>
            <button className="l-button" onClick={this.login}>Continue</button>
            <div className="l-register">
              <span>Need an account? </span>
              <Link to="/register" href="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(loginMutation)(Login); 