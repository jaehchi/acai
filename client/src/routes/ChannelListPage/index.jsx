
import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';


import CHANNELLIST_QUERY from '../../graphQL/ChannelListQuery.graphql';

import ChannelNav from '../../components/ChannelNav/index';
import ChannelList from '../../components/ChannelList';
import Loading from '../../components/globals/Loading'

import './guildContent.sass';

class ChannelListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match, location } = this.props;

    return (
      <div className="guild-content">
        <Query query={CHANNELLIST_QUERY} variables={{ id: match.params.guild_id }}>
          { ({ loading, data }) => {
            
            if (loading) {
              return <div>Fetching</div> 
            }
      
            return (
              <div>
                <ChannelList channels={data.channels || []} match={match}/>
              </div>
            )
  
            }
          }
        </Query>
      </div>
    );
  }
}

export default ChannelListPage;