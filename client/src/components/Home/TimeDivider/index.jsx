import React from 'react';
import moment from 'moment';

import MessageEntry from '../MessageEntry';
import './timeDivider.sass';

const TimeDivider = ({ messages = [], match }) => {
  const username = messages[0].author.username;
  const avatar = messages[0].avatar;
  const time = moment(messages[0].createdAt).calendar(null);

  console.log(avatar)
  
  return ( 
    <div className="t-divider">
      <div className="t-avatar">
        <img 
          src={`http://localhost:3100/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855profile.jpg`} 
        />
      </div>
      <div className="t-content">
        <div className="t-info">
          <div className="t-author">{username}</div>
          <div className="t-time ">{time}</div> 
        </div>
        <div className="t-message">
          {
            messages && messages.map( (message, i) => ( 
              <div className="t-child" key={message.id}>
                <MessageEntry message={message}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default TimeDivider;