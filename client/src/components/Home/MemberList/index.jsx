import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';



class MemberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match : { params: { guild_id }} } = this.props;

    return (
      <div>
      hey
      </div>
    );
  }
}

export default withRouter(MemberList);