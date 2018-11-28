import React, { Component } from 'react';

import './joinServer.sass';

class JoinServer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverInvite: null,
    };

    this.onChange = this.onChange.bind(this);
    this.joinGuild = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async joinGuild () {

  };

  render() {
    const { joinModal } = this.props;
    return (
      <div className="join__server">
        <div className="js-header">
          <h1>Join a server</h1>
          <p>Enter an Instant Invite below to join an existing server. The invite will look something like these:</p>
          <p className="sample-invite">https://acai.gg/a3fjC</p>
          <p className="sample-invite">https://acai.gg/f2df0</p>
          <input name="serverInvite" type="text" placeholder="Enter an Instant Invite" onChange={this.onChange}/>
        </div>
        <div className="js-footer">
          <button className="js-back" onClick={joinModal}>
            <span>Back</span>
          </button>
          <button className='js-join'>Join</button>
        </div>
      </div>
    );
  }
};

export default JoinServer;