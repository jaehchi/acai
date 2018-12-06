import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';

import FeedNav from '../../components/FeedNav';
import AddMessage from '../../components/AddMessage';
import MessageList from '../../components/MessageList';
import Members from '../../components/Members';
import Loading from '../../components/globals/Loading';

import MESSAGES_QUERY from '../../graphQL/MessagesQuery.graphql';

import './feed.sass';

class FeedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    
  return (
    <Query query={MESSAGES_QUERY} variables={{ id: match.params.channel_id }}>
      { ({loading, data}) => {
        if (loading) {
          return <div>Fetching</div> 
        }

        return (
          <div>
            <div className="feed">
              <div className="feed__nav">
                {
                  data.channel ? <FeedNav name={data.channel.name}/> : null
                }
              </div>
              <div className="feed__content">
                <MessageList messages={data.messages}/>
                <AddMessage channel_id={match.params.channel_id} channel_name={data.channel.name} />
              </div>
              <div className="feed__members">
                <Members/>
              </div>
            </div>
          </div>
        )

      }}
     </Query>
    );

  }
}

export default FeedPage;

// export default graphql(AllMessages, {
//   options: ({ match: { params: { channel_id }}}) => ({
//     variables: {
//       id: channel_id
//     }
//   })
// })(Feed);