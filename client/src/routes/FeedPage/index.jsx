import React, { Component } from 'react';
import { Query } from 'react-apollo';

import FeedNav from '../../components/Home/FeedNav';
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
                      <FeedNav name={channel.name}/>
                    </div>
                    <div className="feed__content">
                      <MessageList 
                        messages={messages} 
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