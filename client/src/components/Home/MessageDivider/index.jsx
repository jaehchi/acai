import React from 'react';
import { withRouter } from 'react-router-dom';

import TimeDivider from '../TimeDivider';

import './messageDivider.sass';

const MessageDivider = ({ messages = [], match }) =>  {
  return (
    <div>
      <h1 className='md-container'>
        <span className="md-title">
          {messages[0][0].createdAt.date}
        </span>
      </h1>
      {messages &&  messages.map( (messages) => ( <TimeDivider key={`${match.url}/${messages[0].id}`} messages={messages} /> )) }
    </div>
  );
}


export default withRouter(MessageDivider);