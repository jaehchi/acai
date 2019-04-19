import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import Loading from '../../components/globals/Loading';
import MessageList from '../../components/Home/MessageList';
import AddMessage from '../../components/Home/AddMessage';
import SVG from '../../components/globals/SVG';

import MESSAGE_LIST_QUERY from '../../graphQL/queries/MessageList.graphql';

import './DMFeedPage.sass';

class DMFeedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={MESSAGE_LIST_QUERY} variables={{ id: this.props.match.params.channel_id }} fetchPolicy='cache-first'>
          {
            ({ loading, error,  subscribeToMore, refetch, fetchMore, data: { messages, channel }}) => {
              if ( loading ) {
                return <Loading/>;
              }
              console.log(channel)

              const atUser = channel.recipients.find(el => ( el.id !== localStorage._id));

              return (
                <div className="DMfeed">
                  <div className="DMfeed__nav">
                    <SVG name={"at"} width={16} height={16} viewBox={"0 0 16 16"} fill={"currentColor"}/>
                    <div>{atUser.username}</div>
                  </div>
                  <div className="DMfeed__content">
                    <MessageList 
                      messages={messages.edges || []} 
                      pageInfo = {messages.pageInfo}
                      subscribeToMore={subscribeToMore} 
                      refetch={refetch}
                      fetchMore={fetchMore}
                      channel_id={channel.id}
                      username={atUser.username}
                    />
                    <AddMessage channel_id={this.props.match.params.channel_id} username={atUser.username} />
                  </div>
                </div>
              )
            }
          }
        </Query>
    );
  }
}

export default withRouter(DMFeedPage);