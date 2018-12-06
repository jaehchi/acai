import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import MESSAGES_QUERY from '../../graphQL/MessagesQuery.graphql';

import hashtag from '../../../public/assets/hashtag.svg';

import './channel.sass';

class Channel extends Component {
  constructor(props) {
    super(props);

    this.prefetchMessages = this.prefetchMessages.bind(this);
  }

  async prefetchMessages () {
    const { channel: { id }, client } = this.props;
    const data = await client.query({
      query: MESSAGES_QUERY,
      variables: { id },
    });
  };


  render() {
    const { channel: { id, name }, match } = this.props;
    const link = {
      pathname: `${match.url}/${id}`,
      state: { name, }
    };

    return (
      <div key={id}>
        <NavLink to={link} className="channel" activeClassName="c-active" onMouseOver={this.prefetchMessages}>
          <img className="c-symbol" src={hashtag} alt=""/>
          <div className="c-name">{name}</div>
        </NavLink>
      </div>
        
    );
  }
}

export default withApollo(Channel);