import React from 'react';
import { each } from 'lodash';

import MemberEntry from '../MemberEntry';

import './memberList.sass';

const filterMembers = ( members ) => {
  let onlineMembers = [];
  let offlineMembers = [];

  each( members, ( member ) => {
    member.status !== 'offline' ? onlineMembers.push(member) : offlineMembers.push(member)
  });

  return {
    onlineMembers,
    offlineMembers,
  };
};

const MemberList = ({ members = [] }) => {
  const { onlineMembers, offlineMembers } = filterMembers(members);

  return (
    <div className="member__list">
      <div>
        <div className="ml__presence">{`ONLINE – ${onlineMembers.length}`}</div>
        {  onlineMembers.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
      <div>
        <div className="ml__presence">{offlineMembers.length ? `OFFLINE – ${offlineMembers.length}` : null}</div>
        {   offlineMembers.map( member => ( <MemberEntry key={member.id} member={member}/> )) }
      </div>
    </div>
  );
};


export default MemberList;