
import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';


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
    const variables = { 
      id: match.params.guild_id
    }

    return (
      <Query query={CHANNEL_LIST_QUERY} variables={variables}>
        { ({ loading, data }) => {
          if (loading) {
            return <Loading/>;
          }

          return (
            <div className="guild-content">
              <ChannelNav name={data.guild.name}/>
              <div className="channel__list">
                <ChannelList channels={data.channels || []} guild_id={data.guild.id} match={match}/>
              </div>
              <div>USER SHITS</div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ChannelListPage;