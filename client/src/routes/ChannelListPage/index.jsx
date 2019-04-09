
import React, { Component } from 'react';
import { Query } from 'react-apollo';

import CHANNEL_LIST_QUERY from '../../graphQL/queries/ChannelList.graphql';

import ChannelList from '../../components/Home/ChannelList';
import UserControl from '../../components/Home/UserControl';
import Loading from '../../components/globals/Loading';

import './channelListPage.sass';

class ChannelListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    const channels = match.path === `/channels/:guild_id/` ? (
      <Query query={CHANNEL_LIST_QUERY} variables={{ id: match.params.guild_id }}>
        { ({ loading, data: { channels } }) => {
          if (loading) {
            return <Loading/>;
          }

          

          return (
            <div id="channels__content">
              <div className="channel__nav">
                <div>{channels[0].belongsTo.name}</div>
              </div>
              <div className="channel__list">
                <ChannelList channels={channels || []} match={match}/>
              </div>
              <div>
                <UserControl/>
              </div>
            </div>
          );
        }}
      </Query>
    ) : (
      <div id="channels__content">
        hey
      </div>
    );
    
    return (
      <div>
        {channels}
      </div>
    );
  }
};

export default ChannelListPage;