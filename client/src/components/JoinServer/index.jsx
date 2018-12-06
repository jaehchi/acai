import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { allGuildsQuery } from '../GuildList';

import './joinServer.sass';

class JoinServer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverInvite: '',
    };

    this.onChange = this.onChange.bind(this);
    this.joinGuild = this.joinGuild.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async joinGuild () {
    try {
      const { joinGuild } = await this.props.mutate({
        variables: {
          slug: this.state.serverInvite,
        },
        update: (store, { data: { joinGuild }}) => {
          // reads all guilds in this specific channel from cache
          const data = store.readQuery({
            query: allGuildsQuery,
            variables: {
              id: localStorage._id
            } 
          });

          // pushes newly created guilds in all guilds array
          data.guilds.push(joinGuild);

          // updates the all guilds back in the cache
          store.writeQuery({ query: allGuildsQuery, variables: {
            id: localStorage._id
          }, data });
        }
      });

      this.props.toggleModal();

    } catch (err) {
      console.log(err);
    };
  }

  render() {
    const { joinModal } = this.props;
    return (
      <div className="join__server">
        <div className="js-header">
          <h1>Join a server</h1>
          <p>Enter an Instant Invite below to join an existing server. The invite will look something like these:</p>
          <p className="sample-invite">http://acai.gg/beb7274</p>
          <p className="sample-invite">http://acai.gg/7c0bfd2</p>
          <input name="serverInvite" type="text" placeholder="Enter an Instant Invite" onChange={this.onChange}/>
        </div>
        <div className="js-footer">
          <button className="js-back" onClick={joinModal}>
            <span>Back</span>
          </button>
          <button className='js-join' onClick={this.joinGuild}>Join</button>
        </div>
      </div>
    );
  }
};

const joinGuildMutation = gql`
  mutation JoinGuildMutation ($slug: String!) {
    joinGuild(slug: $slug) {
      id
      name
      avatar
      
      channels {
        id
        name
      }
      
    }
  }
`;

export default graphql(joinGuildMutation)(JoinServer);
