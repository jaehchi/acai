import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import TimeDivider from '../TimeDivider';

import './messageDivider.sass';

const MessageDivider = ({ messages = [], match, date, lastPage }) =>  {

  return (
    <div>
      { 
        !lastPage ?  <h1 className='md-container'>
        <span className="md-title">
          {moment(date).format('MMMM Do, YYYY')}
        </span>
       </h1> : null
      }
      { messages && messages.map( (messages) => ( <TimeDivider key={`${match.url}/${messages[0].id}`} messages={messages} /> )) }
    </div>
  );
};



export default withRouter(MessageDivider);