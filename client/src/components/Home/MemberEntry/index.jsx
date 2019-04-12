import React, { Component } from 'react';

import SVG from '../../globals/SVG';

import './memberEntry.sass';

const MemberEntry = ({ member }) => {
  const avatar =  !( member.avatar[0] === '#') ? ( <img src={`http://localhost:3100/${member.avatar}`} /> ) : (
    <div className="member-default-avatar" style={{ backgroundColor: member.avatar }}>
      <SVG height={"30px"} viewBox={"0 -15 512 512"} width={"30px"}/>
    </div>
  );


  
  return (
    <div className="member">
      <div className="member__avatar">
        { avatar }
      </div>
      <div className={`member__status ${member.status}`}></div>
      <div className="member__name">{member.username}</div>
    </div>
  );
};

export default MemberEntry;