import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { withApollo, compose } from 'react-apollo';

import CHANNELLIST_QUERY from '../../../graphQL/ChannelListQuery.graphql';
import './guildEntry.sass';

class GuildEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.guild.avatar,
    }

    this.prefetchChannels = this.prefetchChannels.bind(this);
    this.onBrokenImage = this.onBrokenImage.bind(this);
  }

  async prefetchChannels () {
    const { guild: { id }, client} = this.props;
    await client.query({
      query: CHANNELLIST_QUERY,
      variables: { id },
    });
  };

  onBrokenImage (e) {
    this.setState({
      avatar: null, 
    })
  }
  
  render() {
    const { guild: { id, name, avatar, channels: [{ children }] }} = this.props;
    const path = `/channels/${id}/${children[0].id}`;

    return (
      <div className="guildItem">
        <NavLink to={path} className="g-avatar" activeClassName="g-active" onMouseOver={this.prefetchChannels} isActive={ () => ( this.props.location.pathname.includes(id) )} >
          {
            this.state.avatar ? 
              <img 
                src={`http://localhost:3100/${avatar}`} 
                onError={this.onBrokenImage} 
              /> : <p>{name[0]}</p>
          }
        </NavLink>
        <div className="g-selector"></div>
      </div>
    );
  };
};

export default withRouter(withApollo(GuildEntry));