import React, { Component } from 'react';

import MessageEntry from '../MessageEntry';
import './timeDivider.sass';

const TimeDivider = ({ messages, match }) => {
  return ( 
    <div className="t-divider">
      <div className="t-time ">{messages[0].createdAt.time}</div>
      <div className="t-message">
        {
          messages.map( (message, i) => ( 

            <div className="t-child"  key={message.id}>
  
              <MessageEntry message={message}/>
            </div>
            ))
        }
      </div>
    </div>
  )
};

export default TimeDivider;