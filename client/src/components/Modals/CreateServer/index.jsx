import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { graphql, compose, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import request from 'superagent';
import { withRouter } from 'react-router-dom';

import GUILDLIST_QUERY from '../../../graphQL/GuildListQuery.graphql';

import './CreateServer.sass';

class CreateServer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      preview: null,
      imageURL: null,
      serverName: '',
    }

    this.onDrop = this.onDrop.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addGuild = this.addGuild.bind(this);
  }

  onDrop(files) {
    if ( this.state.preview ) {
      // revoke previous data URIs, if any, to avoid memory leaks
      window.URL.revokeObjectURL(this.state.preview);
    }

    this.setState({
      file: files[0],
      preview: URL.createObjectURL(files[0])
    });
  };
  
  onRemove () {
    // revoke previous data URIs, if any, to avoid memory leaks
    window.URL.revokeObjectURL(this.state.preview);

    this.setState({
      file: null,
      preview: null
    });
  };

  async onUpload (file) {
    try {
      const { text } = await request.post(`http://localhost:3100/api/uploads/avatar`)
        .attach('avatar', file, file.name);

      this.setState({
        imageURL: text
      });
    } catch (err) {
      console.error('Failed to upload.', err)
    }
  };

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async addGuild() {
    try {
      this.state.file ? await this.onUpload(this.state.file) : null;

      const { createGuild } = await this.props.mutate({
        variables: {
          name: this.state.serverName,
          avatar: this.state.imageURL
        },
        update: (store, { data: { createGuild }}) => {
          // reads all guilds in this specific channel from cache
          const data = store.readQuery({
            query: GUILDLIST_QUERY,
            variables: {
              id: localStorage._id
            } 
          });

          // pushes newly created guilds in all guilds array
          data.guilds.push(createGuild);

          // updates the all guilds back in the cache
          store.writeQuery({ query: GUILDLIST_QUERY, variables: {
            id: localStorage._id
          }, data });

          // goes to the newly created guild
          this.props.history.push(`/channels/${createGuild.id}/${createGuild.channels[0].children[0].id}`);
        }

      });

      this.props.toggleModal();
    } catch (err) {
      console.log('asdf',err);
    }
  };

  render() {
    const { createModal } = this.props;

    return (
      <div className="create__server">
        <div className="cs-header">
          <h1>Create your server</h1>
          <p>By creating a server, you will have access to voice and text chat to use amongst your friends.</p>
        </div>
        <div className="cs-form">
          <h3>Server Name</h3>
          <input name="serverName" type="text" placeholder="Enter a server name" onChange={this.onChange}/>
        </div>
        <div className="cs-avatar">
          <Dropzone
            name='avatar'
            className="cs-dropzone"
            accept="image/*"
            multiple={false}
            maxSize={5000000}
            onDrop={this.onDrop}
          >
            { 
              this.state.preview ? 
              <img src={ this.state.preview } alt="image preview"/> : ( !this.state.serverName ? <h1>Change Icon</h1> :  <h2> {this.state.serverName[0]} </h2>)
            }
          </Dropzone>
          {
            this.state.preview ? 
            <button className="cs-rf" onClick={this.onRemove}>remove</button> : null
          }
        </div>
        <div className="cs-footer">
          <button className="cs-back" onClick={createModal}>
            <span>Back</span>
          </button>
          <button className='cs-create' onClick={this.addGuild}>Create</button>
        </div>
      </div>
    );
  };
};


const addGuildMutation = gql`
  mutation AddGuildMutation ($name: String!, $avatar: String) {
    createGuild(name: $name, avatar: $avatar) {
      id
      name
      avatar
      
      channels {
        id
        name

        children {
          id
          name
        }
      }
      
    }
  }
`;

export default compose(withRouter, graphql(addGuildMutation))(CreateServer);
