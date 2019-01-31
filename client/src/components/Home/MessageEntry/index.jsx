import React from 'react';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import './messageEntry.sass';

const MessageEntry = ({ message }) => {
  return (
    <div className='message'>      
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