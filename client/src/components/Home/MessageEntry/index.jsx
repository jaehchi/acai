import React from 'react';

import './message.sass';

const MessageEntry = ({ message }) => {
  console.log(message.id)
  return (
    <div className={message.id < 0 ? `message optimistic` : 'message'}>
      <div className="m-time"><span>{message.createdAt.time}</span></div>
      <div className="m-author">{message.author.username}</div>
      <div className="m-content">{message.content}</div>
    </div>
  )
};

export default MessageEntry;