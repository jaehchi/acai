import React, { Component } from 'react';
import { each } from 'lodash';
import moment from 'moment';
import gql from 'graphql-tag';

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

const sub = gql`
  subscription onNewMessage ($id: ID!){
    newMessage (id: $id){
    node {
      id
      content
      createdAt
      author { 
        id
        username
      }
    }
    }
  }
`

class MessageList extends Component {
  constructor(props) {
    super(props);

    this._subscribeToNewMessage = this._subscribeToNewMessage.bind(this);
    this._refetchMessages = this._refetchMessages.bind(this);
  }

  componentDidMount() {
    const messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;

    this._subscribeToNewMessage();
    
  }

  componentDidUpdate(prevProps, prevState) {
 
    const messageList = document.getElementById('messageList');
    
    this.props.messages > prevProps.messages ?  messageList.scrollTop = messageList.scrollHeight : null;
    
    if ( this.props.channel_id !== prevProps.channel_id ) {

      this.subscription();
      this._refetchMessages();
      this._subscribeToNewMessage();
    }
  }
  _refetchMessages () {
    this.props.refetch();
  }
  _subscribeToNewMessage () {
    this.subscription = this.props.subscribeToMore({
      document: sub,
      variables: {
        id: this.props.channel_id
      },
      updateQuery: ( prev, { subscriptionData } ) => {
        if (!subscriptionData.data) {
          return prev;
        } 

        const newMessage = subscriptionData.data.newMessage.node;

        const isDuplicate = prev.messages.filter(message => {
          return message.id === newMessage.id;
        }).length > 0;

        if ( !isDuplicate ) {
          prev.messages.push(newMessage)
        }
  
        return Object.assign({}, prev, {
          messages: prev.messages,
          channel: prev.channel
        })
      }
    });
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