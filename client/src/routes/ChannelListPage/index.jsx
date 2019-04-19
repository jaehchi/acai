
import React, { Component } from 'react';
import { Query, withApollo } from 'react-apollo';

import USER_INFO_FRAGMENT from '../../graphQL/fragments/UserInfo.graphql';

import CHANNEL_LIST_QUERY from '../../graphQL/queries/ChannelList.graphql';

import ChannelList from '../../components/Home/ChannelList';
import UserControl from '../../components/Home/UserControl';
import Loading from '../../components/globals/Loading';

import './channelListPage.sass';

class ChannelListPage extends Component {
  constructor(props) {
    super(props);

    this.prefetchUserInfo = this.prefetchUserInfo.bind(this);
  }

  async prefetchUserInfo () {
    this.user = await this.props.client.readFragment({
      id: localStorage._id,
      fragment: USER_INFO_FRAGMENT
    });
  }

  componentWillMount() {
    this.prefetchUserInfo();
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
                <UserControl />
              </div>
            </div>
          );
        }}
      </Query>
    ) : null;
    
    return (
      <div>
        {channels}
      </div>
    );
  }
};

export default withApollo(ChannelListPage);