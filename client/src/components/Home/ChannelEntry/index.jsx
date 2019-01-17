import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';

import './channelEntry.sass';

class ChannelEntry extends Component {
  constructor(props) {
    super(props);

    this.prefetchMessages = this.prefetchMessages.bind(this);
  }

  async prefetchMessages () {
    const { channel: { id }, client } = this.props;
    const data = await client.query({
      query: MESSAGE_LIST_QUERY,
      variables: { id },
    });
  };

  render() {
    const { 
      channel: { id, name, type }, 
      match 
    } = this.props;
    const path = `${match.url}/${id}`;
  
    return (
      <div key={id}>
        <NavLink to={path} className="channel" activeClassName="c-active" onMouseOver={this.prefetchMessages}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path className="c-symbol" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)">
            </path>
          </svg>
          <div className="c-name">{name}</div>
        </NavLink>
      </div>
    );
  }
};


ChannelEntry.fragments = {
  entry: gql`
    fragment ChannelInfo on Channel {
      id 
      name
      type
      position
    }
  `,
};

ChannelEntry.propType = {
  channel: propType(ChannelEntry.fragments.entry).isRequired,
}

export default withApollo(ChannelEntry);