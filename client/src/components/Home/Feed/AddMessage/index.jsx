import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { AllMessages } from '../index';
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
      const message = await this.props.mutate({
        variables: {
          id: this.props.channel.id,
          content: this.state.content
        },
        update: (store, { data: { createMessage }}) => {
          // reads all messages in this specific channel from cache
          const data = store.readQuery({
            query: AllMessages,
            variables: {
              id: this.props.channel.id 
            } 
          });

          console.log('asdf', data);
          // pushes newly created messages in all messages array
          data.allMessages.push(createMessage);
          console.log('asdf', data);
          // updates the all messages back in the cache
          store.writeQuery({ query: AllMessages, variables: {
            id: this.props.channel.id,
          }, data });
        }

      });
    } catch (err) {
      console.log(err);
    } 
  }

  render() {  
    // console.log(this.props)
    return (
      <div className="add__message">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="content"
            placeholder={`Message #${this.props.channel.name}`}
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