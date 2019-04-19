import React, { Component } from 'react';
import { Query } from 'react-apollo';

import AddMessage from '../../components/Home/AddMessage';
import MessageList from '../../components/Home/MessageList';
import MemberList from '../../components/Home/MemberList';
import Loading from '../../components/globals/Loading';
import SVG from '../../components/globals/SVG';


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
      // 5000
      <Query query={MEMBER_LIST_QUERY} variables={{ id: match.params.guild_id }} pollInterval={100000}> 
        {  ({ loading, data: { guild } } ) => {
          if (loading) {
            return <Loading/>;
          } 

          return (
            <Query query={MESSAGE_LIST_QUERY} variables={{ id: match.params.channel_id }} fetchPolicy='cache-first'>
              { ({ loading, subscribeToMore, refetch, fetchMore, data: { messages, channel }}) => {
                if (loading ) {
                  return <Loading/>;
                }

                return (
                  <div className="feed">
                    <div className="feed__nav">
                      <SVG name={"hashtag"} width={16} height={16} viewBox={"0 0 16 16"} fill={"currentColor"} className={"c-symbol"}/>
                      <div>{channel.name}</div>
                    </div>
                    <div className="feed__content">
                      <MessageList 
                        messages={messages.edges || []} 
                        pageInfo = {messages.pageInfo}
                        subscribeToMore={subscribeToMore} 
                        refetch={refetch}
                        fetchMore={fetchMore}
                        channel_id={channel.id}
                        channel_name={channel.name}
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

