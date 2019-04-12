import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import SVG from '../../globals/SVG';

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
          <SVG name={"hashtag"} width={16} height={16} viewBox={"0 0 16 16"} fill={"currentColor"} className={"c-symbol"}/>
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