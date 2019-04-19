import React, { Component } from 'react';

import SVG from '../../globals/SVG';
import UserSettings from '../../Modals/UserSettings';


import './userControl.sass';

 const UserControl = () => {
  const { id, username, avatar, status } = localStorage;

  const userAvatar =  !( avatar[0] === '#') ? ( <img src={`http://localhost:3100/${avatar}`} /> ) : (
    <div className="user-default-avatar" style={{ backgroundColor: avatar }}>
       <SVG height={"30px"} viewBox={"0 -15 512 512"} width={"30px"}/>
     </div>
   );

  return (
    <div>
      <div className="user__info">
        <div className="user__avatar">
          { userAvatar }
        </div>
        <div className={`user__status ${status}`}></div>
        <div className="user__name">{username}</div>
        <div className="user__settings">
          <UserSettings/>
        </div>
      </div>
    </div>
  );
}

export default UserControl;