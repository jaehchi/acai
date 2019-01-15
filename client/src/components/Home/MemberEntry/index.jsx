import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MemberEntry extends Component {
  constructor (props) {
    super(props);

  }

  render() {
    const { member } = this.props;
  
    return (
      <div>
        {member.username}
      </div>
    );
  }
}



export default MemberEntry;