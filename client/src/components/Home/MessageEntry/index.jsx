import React from 'react';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import './message.sass';

const MessageEntry = ({ message }) => {
  return (
    <div className={message.id < 0 ? `message optimistic` : 'message'}>
      <div className="m-time"><span>{message.createdAt.time}</span></div>
      <div className="m-author">{message.author.username}</div>
      <div className="m-content">{message.content}</div>
    </div>
  )
};

MessageEntry.fragments = {
  entry: gql`
    fragment MessageInfo on Message {
      id
      content
      createdAt

      author {
        id
        username
        avatar
      }
    }
  `
};

MessageEntry.propType = {
  message: propType(MessageEntry.fragments.entry).isRequired,
};

export default MessageEntry;