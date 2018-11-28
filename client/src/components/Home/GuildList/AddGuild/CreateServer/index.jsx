import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import request from 'superagent';

import { allGuildsQuery } from '../../';

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
        imageURL: `http://localhost:3100/${text}`
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
      await this.onUpload(this.state.file);
      const { createGuild } = await this.props.mutate({
        variables: {
          name: this.state.serverName,
          avatar: this.state.imageURL
        },
        update: (store, { data: { createGuild }}) => {
          // reads all guilds in this specific channel from cache
          const data = store.readQuery({
            query: allGuildsQuery,
            variables: {
              id: localStorage._id
            } 
          });

          // pushes newly created guilds in all guilds array
          data.guilds.push(createGuild);

          // updates the all guilds back in the cache
          store.writeQuery({ query: allGuildsQuery, variables: {
            id: localStorage._id
          }, data });
        }
      });

      this.props.toggleModal();

    } catch (err) {
      console.log(err);
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
              <img src={ this.state.preview } alt="image preview"/>: <h2>Change Icon</h2>
            }
          </Dropzone>
          {
            this.state.preview ? 
            <button className="cs-rf" onClick={this.onRemove.bind(this)}>remove</button> : null
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
      }
      
    }
  }
`;

export default graphql(addGuildMutation)(CreateServer);
