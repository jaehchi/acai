import React from 'react';

import './messageEntry.sass';

const MessageEntry = ({ message }) => {

  return (
    <div className="message">
      <div className="m-time"><span>{message.createdAt.time}</span></div>
      <div className="m-author">{message.author.username}</div>
      <div className="m-content">{message.content}</div>
    </div>
  )
};

export default MessageEntry;