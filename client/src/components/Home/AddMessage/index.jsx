import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import MESSAGES_QUERY from '../../../graphQL/MessagesQuery.graphql';
import './addMessage.sass';

class AddMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  async onSubmit (e) {
    e.preventDefault();

    try {
      await this.props.mutate({
        variables: {
          id: this.props.channel_id,
          content: this.state.content
        },
        update: (store, { data: { createMessage }}) => {
          // reads all messages in this specific channel from cache
          const data = store.readQuery({
            query: MESSAGES_QUERY,
            variables: {
              id: this.props.channel_id
            } 
          });


          // pushes newly created messages in all messages array
          data.messages.push(createMessage);
  
          // updates the all messages back in the cache
          store.writeQuery({ 
            query: MESSAGES_QUERY,
            data: data,
            variables: {
              id: this.props.channel_id,
            }
          });
        }

      });
    } catch (err) {
      console.log(err);
    } 
  }

  render() {  
    
    return (
      <div className="add__message">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="content"
            placeholder={`Message #${this.props.channel_name}`}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
};

const AddMessageMutation = gql`
  mutation AddMessageMutation ($id: ID!, $content: String!) {
    createMessage(id: $id, content: $content) {
      id
      content
      createdAt
      
      author {
        id
        username
        avatar
      }
    }
  }
`;

export default graphql(AddMessageMutation)(AddMessage);