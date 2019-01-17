import React, { Component } from 'react';
import { each } from 'lodash';
import moment from 'moment';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import MessageDivider from '../MessageDivider';
import NEW_MESSAGE_SUBSCRIPTION from '../../../graphQL/subscriptions/NewMessage.graphql';
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

    this.subscribe = null;

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
    
    if ( this.props.channel_id !== prevProps.channel_id ) { // If we changed channels, ...
      this.subscription();                                  // Unsubscribe to the previous channel
      this._refetchMessages();                              // refetch message for the current channel
      this._subscribeToNewMessage();                        // and Subscribe to the new channel
    }
  }

  _refetchMessages () {
    this.props.refetch();
  }

  _subscribeToNewMessage () {
    // subscribeToMore returns an unsubscribe function, so this.subscription() unsubscribes to from the current channel.
    this.subscription = this.props.subscribeToMore({
      document: NEW_MESSAGE_SUBSCRIPTION,
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
          prev.messages.push(newMessage);
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
};

MessageList.fragments = {
  messages: gql`
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
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(propType(MessageList.fragments.messages).isRequired),
  refetch: PropTypes.func.isRequired,
  subscribeToMore: PropTypes.func.isRequired,
  channel_id: PropTypes.string.isRequired,
}

export default MessageList;