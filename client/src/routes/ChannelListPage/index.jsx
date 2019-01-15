
import React, { Component } from 'react';
import { Query } from 'react-apollo';

import CHANNEL_LIST_QUERY from '../../graphQL/queries/ChannelList.graphql';

import ChannelNav from '../../components/Home/ChannelNav';
import ChannelList from '../../components/Home/ChannelList';
import Loading from '../../components/globals/Loading';

import './channelListPage.sass';

class ChannelListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    
    return (
      <Query query={CHANNEL_LIST_QUERY} variables={{ id: match.params.guild_id }}>
        { ({ loading, data: { channels } }) => {
          if (loading) {
            return <Loading/>;
          }

          return (
            <div className="guild-content">
              <ChannelNav name={channels[0].belongsTo.name}/>
              <div className="channel__list">
                <ChannelList channels={channels || []} match={match}/>
              </div>
              <div>USER SHITS</div>
            </div>
          );
        }}
      </Query>
    );
  }
};

export default ChannelListPage;