
import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';


import CHANNELLIST_QUERY from '../../graphQL/ChannelListQuery.graphql';

import ChannelNav from '../../components/Home/ChannelNav';
import ChannelList from '../../components/Home/ChannelList';
import Loading from '../../components/globals/Loading';

import './guildContent.sass';

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
      <div className="guild-content">
        <Query query={CHANNELLIST_QUERY} variables={variables}>
          { ({ loading, data }) => {
            if (loading) {
              return <Loading/>;
            }
      
            return (
              <div>
                <ChannelNav name={data.guild.name}/>
                <ChannelList channels={data.channels || []} guild_id={data.guild.id} match={match}/>
              </div>
            );
  
          }}
        </Query>
      </div>
    );
  }
}

export default ChannelListPage;