import React, { Component } from 'react';
import { each } from 'lodash';
import moment from 'moment';
import { propType } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';

import Loading from '../../globals/Loading';
import MessageDivider from '../MessageDivider';

import NEW_MESSAGE_SUBSCRIPTION from '../../../graphQL/subscriptions/NewMessage.graphql';
import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';

import './messageList.sass';

const apply = (map) => {
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

  each( messages, ( node ) => {
    const message = node.node
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


    this.unsubscribe = null;
    this.list = React.createRef();

    this._subscribeToNewMessage = this._subscribeToNewMessage.bind(this);
    this._refetchMessages = this._refetchMessages.bind(this);
    this._fetchMoreMessages = this._fetchMoreMessages.bind(this);
    this._onScrollHandler = this._onScrollHandler.bind(this);
  }

  componentDidMount() {
    const messageList = document.getElementById('messageList');
    messageList.scrollTop = messageList.scrollHeight;

    this._subscribeToNewMessage();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const list = this.list.current;

    if (snapshot) {
      list.scrollTop = list.scrollHeight - snapshot;
    }
    
    if ( this.props.channel_id !== prevProps.channel_id ) {    // If we changed channels, ...
      this.unsubscribe();                                      // Unsubscribe to the previous channel
      this._refetchMessages();                                 // refetch message for the current channel
      this._subscribeToNewMessage();                           // and Subscribe to the new channel
      list.scrollTop = list.scrollHeight;
    }
  }

  getSnapshotBeforeUpdate( prevProps, prevState ) {
    if (prevProps.messages.length < this.props.messages.length) {
      const list = this.list.current;
      return list.scrollHeight + ( list.clientHeight / 3 );
    }
    return null;
  }
  
  _refetchMessages () {
    this.props.refetch();
  }

  _fetchMoreMessages () {    
    if ( this.props.pageInfo.hasPreviousPage ) {
      this.props.fetchMore({
        query: MESSAGE_LIST_QUERY,
        variables: { 
          id: this.props.match.params.channel_id,
          cursor: this.props.pageInfo.startCursor 
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.messages.edges;
          const pageInfo = fetchMoreResult.messages.pageInfo;

          return newEdges.length ? {
            messages: {
              edges: [...newEdges, ...prev.messages.edges],
              pageInfo,
              __typename: prev.messages.__typename,
            },
            channel: prev.channel
          }
          : prev;
        }, 
      });

    }
    
  }

  _subscribeToNewMessage () {
    // subscribeToMore returns an unsubscribe function, so this.unsubscribe() unsubscribes to from the current channel.
    this.unsubscribe = this.props.subscribeToMore({
      document: NEW_MESSAGE_SUBSCRIPTION,
      variables: {
        id: this.props.channel_id
      },
      updateQuery: ( prev, { subscriptionData } ) => {
        if (!subscriptionData.data) {
          return prev;
        } 

        const node = {
          node: subscriptionData.data.newMessage.node,
          cursor: subscriptionData.data.newMessage.node.id,
          __typename: 'MessageEdge',
        };
        
        const isDuplicate = prev.messages.edges.filter(message => {
          return message.cursor === node.cursor;
        }).length > 0;

        if ( !isDuplicate ) {
          prev.messages.edges.push(node);
        }
  
        return Object.assign({}, prev, {
          messages: prev.messages,
          channel: prev.channel
        });
      }
    });
  };

  _onScrollHandler () {
    const messageList = document.getElementById('messageList');
    const scrollTop = messageList.scrollTop;
    const scrollHeight = messageList.scrollHeight;
    const clientHeight = messageList.clientHeight;
    
    if ( scrollTop === 0 && this.props.pageInfo.hasPreviousPage ) {
      this._fetchMoreMessages();
    }
  }

  render() {
    const { messages } = this.props;

    return (
      <div id="messageList" onScroll={this._onScrollHandler} ref={this.list}>
        { 
          messages && separateMessagesByDate(messages).map( ( messagesByDate, index ) => ( 
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

// MessageList.propTypes = {
//   messages: PropTypes.arrayOf(propType(MessageList.fragments.messages).isRequired),
//   refetch: PropTypes.func.isRequired,
//   subscribeToMore: PropTypes.func.isRequired,
//   channel_id: PropTypes.string.isRequired,
// }

export default withRouter(MessageList);