import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import CHANNEL_LIST_QUERY from '../../../graphQL/queries/ChannelList.graphql';

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
    const { guild: { id }, client } = this.props;
    await client.query({
      query: CHANNEL_LIST_QUERY,
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


GuildEntry.fragments = {
  entry: gql`
    fragment GuildInfo on Channel {
      id
      name
      avatar
    }
  `,
};

GuildEntry.propType = {
  guild: propType(GuildEntry.fragments.entry).isRequired,
  client: PropTypes.instanceOf(ApolloClient).isRequired,
}



export default withRouter(withApollo(GuildEntry));