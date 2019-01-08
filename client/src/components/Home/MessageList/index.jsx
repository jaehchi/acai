import React, { Component } from 'react';
import { each } from 'lodash';
import moment from 'moment';

import MessageDivider from '../MessageDivider';
import './messageList.sass';

const apply =  (map) => {
  let arr = [];
  
  for( let key in map ) {
    arr.push(map[key]);
  }

  return arr;
}

const separateMessagesByDate = (messages) => {
  const map = {};
  let array;
  let date;
  let prevTime; 
  let user;

  each( messages, ( message ) => {
    
    let time = message.createdAt;
    let createdAt =  moment(message.createdAt).format('MMMM Do, YYYY| h:mm A').split('| ');
  
    message.createdAt = {
      date: createdAt[0],
      time: createdAt[1]
    };

    date = message.createdAt.date;
  
    if ( map[date] === undefined ) {
      array = [];
      user = message.author.username;
      prevTime = time;
      array.push( message );
      map[date] = [array];
    } else {
      if( user === message.author.username && moment.duration( moment(time).diff(moment(prevTime)) ).asMinutes() <= 2 ) {
        array.push(message);
        prevTime = time;
      } else {
        array = [];
        user = message.author.username;
        prevTime = time;
        array.push(message);
        map[date].push(array);
      }
    }
  });
  
  return apply(map);
}

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState) {
    const messageList = document.getElementById('messageList');

    this.props.messages > prevProps.messages ?  messageList.scrollTop = messageList.scrollHeight : null;
  }  

  render() {
    const { messages } = this.props;

    return (
      <div id="messageList">
        { 
          separateMessagesByDate(messages).map((messagesByDate, index ) => ( 
            <MessageDivider key={index} messages={messagesByDate}/> 
          )) 
        }
      </div>
    );
  }
}

export default MessageList;