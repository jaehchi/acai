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



class FeedPage extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { match } = this.props;
    
  return (
    <Query query={MESSAGES_QUERY} variables={{ id: match.params.channel_id }} fetchPolicy="cache-first">
      { ({ loading, subscribeToMore, refetch, data }) => {
        if (loading) {
          return <Loading/>;
        } 
      
        return (
          <div className="feed">
            <div className="feed__nav">
              <FeedNav name={data.channel.name}/>
            </div>
            <div className="feed__content">
              <MessageList messages={data.messages} subscribeToMore={subscribeToMore} refetch={refetch} channel_id={data.channel.id}/>
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