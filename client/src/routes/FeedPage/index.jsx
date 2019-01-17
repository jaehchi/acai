import React, { Component } from 'react';
import { Query } from 'react-apollo';

import AddMessage from '../../components/Home/AddMessage';
import MessageList from '../../components/Home/MessageList';
import MemberList from '../../components/Home/MemberList';
import Loading from '../../components/globals/Loading';

import MESSAGE_LIST_QUERY from '../../graphQL/queries/MessageList.graphql';
import MEMBER_LIST_QUERY from '../../graphQL/queries/MemberList.graphql';

import './feedPage.sass';

class FeedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    console.log('hey')

    return (
      <Query query={MEMBER_LIST_QUERY} variables={{ id: match.params.guild_id }} pollInterval={1000}>
        {  ({ loading, data: { guild } } ) => {
          if (loading) {
            return <Loading/>;
          } 

          return (
            <Query query={MESSAGE_LIST_QUERY} variables={{ id: match.params.channel_id }} fetchPolicy="cache-first">
              { ({ loading, subscribeToMore, refetch, data: { channel, messages } }) => {
                if (loading ) {
                  return <Loading/>
                }
                
                return (
                  <div className="feed">
                    <div className="feed__nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path className="c-symbol" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)">
                      </path>
                    </svg>
                    <div>{channel.name}</div>
                    </div>
                    <div className="feed__content">
                      <MessageList 
                        messages={messages || []} 
                        subscribeToMore={subscribeToMore} 
                        refetch={refetch}
                        channel_id={channel.id}
                      />
                      <AddMessage channel_id={match.params.channel_id} channel_name={channel.name} />
                    </div>
                    <div className="feed__members">
                      <MemberList members={guild.members|| []}/>
                    </div>
                  </div>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default FeedPage;