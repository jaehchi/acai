import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

import FeedNav from '../../components/Home/FeedNav';
import AddMessage from '../../components/Home/AddMessage';
import MessageList from '../../components/Home/MessageList';
import Members from '../../components/Home/Members';
import Loading from '../../components/globals/Loading';

import MESSAGES_QUERY from '../../graphQL/MessagesQuery.graphql';

import './feedPage.sass';

const sub = gql`
  subscription {
    newMessage {
      node {
        id
        content
        author { 
          id
          username
        }
        createdAt
        
      }
    }
  }
`

class FeedPage extends Component {
  constructor(props) {
    super(props);

    this._subscribeToNewMessage = this._subscribeToNewMessage.bind(this);
  }

  async _subscribeToNewMessage (subscribe) {
    subscribe({
      document: sub,
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
    const { match } = this.props;
    
  return (
    <Query query={MESSAGES_QUERY} variables={{ id: match.params.channel_id }} fetchPolicy="cache-first">
      { ({ loading, subscribeToMore, data }) => {
        if (loading) {
          return <Loading/>;
        }

        // this._subscribeToNewMessage(subscribeToMore);
      
        return (
          <div className="feed">
            <div className="feed__nav">
              <FeedNav name={data.channel.name}/>
            </div>
            <div className="feed__content">
              <MessageList messages={data.messages} />
              <AddMessage channel_id={match.params.channel_id} channel_name={data.channel.name} />
            </div>
            <div className="feed__members">
              <Members/>
            </div>
          </div>
        );
      }}
    </Query>
    );

  }
}

export default FeedPage;