import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { fetchGuildsQuery } from '../../../graphQL/queries/guilds';


class GuildList extends Component {
  constructor(props) {
    super(props);
  }

  async fetchGuild () {

  }

  render() {
    console.log(this.props)
    return (
      <div>
        hey from guildList
      </div>
    );
  }
}

export default graphql(fetchGuildsQuery)(GuildList);