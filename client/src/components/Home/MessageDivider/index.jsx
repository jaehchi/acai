import React, { Component } from 'react';

import TimeDivider from '../TimeDivider';
import './messageDivider.sass';

const MessageDivider = ({ messages }) =>  {
  return (
    <div>
      <h1 className='md-container'>
        <span className="md-title">
          {messages[0][0].createdAt.date}
        </span>
      </h1>
      { messages.map( (messages) => ( <TimeDivider messages={messages} /> )) }
    </div>
  );
}


export default MessageDivider;