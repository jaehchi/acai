import React from 'react';
import moment from 'moment';

import MessageEntry from '../MessageEntry';
import SVG from '../../globals/SVG';

import './timeDivider.sass';

const TimeDivider = ({ messages = [], match }) => {
  const username = messages[0].author.username;
  const avatar = messages[0].author.avatar;
  const isDefaultAvatar =  avatar[0] === '#';
  const time = moment(messages[0].createdAt).calendar(null);

  return ( 
    <div className="t-divider">
      <div className="t-avatar">
        {
          !isDefaultAvatar ? <img src={`http://localhost:3100/${avatar}`} /> : <div className="t-default-avatar" style={{ backgroundColor: avatar }}>
            <SVG height={"40px"} viewBox={"0 -15 512 512"} width={"40px"}/>
          </div>
        }
      </div>
      <div className="t-content">
        <div className="t-info">
          <div className="t-author">{username}</div>
          <div className="t-time ">{time}</div> 
        </div>
        <div className="t-message">
          {
            messages && messages.map( (message, i) => ( 
              <div key={message.id}>
                <MessageEntry message={message}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TimeDivider;