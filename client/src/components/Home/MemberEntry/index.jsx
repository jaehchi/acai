import React, { Component } from 'react';

import './memberEntry.sass';


const MemberEntry = ({ member }) => {
  return (
    <div className="member">
      <div className="member__avatar">
        <div className="member__status"></div>
      </div>
      <div className="member__name">{member.username}</div>
    </div>
  );
};

export default MemberEntry;