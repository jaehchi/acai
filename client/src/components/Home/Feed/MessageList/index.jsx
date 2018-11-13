import React, { Component } from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {
        messages.map( ({id, content, createdAt, author }) => (
          <div key={id} className="">
            <p>{content}</p>
            <p>{author.id}</p>
          </div>
        ))
      }
    </div>
  );
};

export default MessageList;