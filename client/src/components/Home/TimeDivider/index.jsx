import React, { Component } from 'react';

import MessageEntry from '../MessageEntry';
import './timeDivider.sass';

const TimeDivider = ({ messages }) => {
  return ( 
    <div className="t-divider">
      <div className="t-time ">{messages[0].createdAt.time}</div>
      <div className="t-message">
        {
          messages.map( message => ( 
            <div className="t-child">
              <MessageEntry message={message}/>
            </div>
            ))
        }
      </div>
    </div>
  )
};

export default TimeDivider;