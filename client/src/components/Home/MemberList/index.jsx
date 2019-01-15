import React from 'react';

import MemberEntry from '../MemberEntry';

const MemberList = ({ members = [] }) => {
  const membersOnline = members.filter( member => member.status === 'online');
  const membersOffline = members.filter( member => member.status === 'offline');
  
  return (
    <div>
      <div className="members__online">
        { membersOnline.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
      <div className="members__online">
        { membersOffline.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
    </div>
  );
};


export default MemberList;