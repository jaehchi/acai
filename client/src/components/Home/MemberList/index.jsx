import React from 'react';

import MemberEntry from '../MemberEntry';

import './memberList.sass';

const MemberList = ({ members = [] }) => {
  const membersOnline = members.filter( member => member.status === 'online');
  const membersOffline = members.filter( member => member.status === 'offline');
  
  return (
    <div className="member__list">
      <div>
        <div className="ml__presence">{`Online-${membersOnline.length}`}</div>
        { membersOnline && membersOnline.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
      <div>
        <div className="ml__presence">{membersOffline.length ? `Offline-${membersOffline.length}` : null}</div>
        { membersOffline && membersOffline.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
    </div>
  );
};


export default MemberList;