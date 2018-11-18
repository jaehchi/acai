import React, { Component } from 'react';

import './messageList.sass';

const MessageList = ({ messages }) => {
  return (
    <div className="messageList">
      {
        messages.map( ({id, content, createdAt, author }) => (
          <div key={id} className="">
            <div>{createdAt}</div>
            <div>{author.username}</div>
            <div>{content}</div>
          </div>
        ))
      }
    </div>
  );
};

export default MessageList;