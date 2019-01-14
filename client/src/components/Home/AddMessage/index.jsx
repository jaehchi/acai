import React, { Component } from 'react';
import { graphql } from 'react-apollo';


import MESSAGE_LIST_QUERY from '../../../graphQL/queries/MessageList.graphql';
import CREATE_MESSAGE_MUTATION from '../../../graphql/mutations/CreateMessage.graphql';
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

    const variables = {
      id: this.props.channel_id,
      content: this.state.content
    };
    

    try {
      await this.props.mutate({
        variables,
        optimisiticResponse: {
          __typename: 'Mutation',
          createMessage: {
            id: Math.round(Math.random() * -1000000),
            author: {
              id: localStorage._id,
              username: localStorage.username,
              __typename: 'User'
            },
            createdAt: new Date(),
            content: variables.comment,
            __typename: "Message",
          }
        },
        update: (store, { data: { createMessage }}) => {
          // reads all messages in this specific channel from cache
          const data = store.readQuery({
            query: MESSAGE_LIST_QUERY,
            variables: {
              id: this.props.channel_id
            } 
          });

          // pushes newly created messages in all messages array
          data.messages.push(createMessage);
  
          // updates the all messages back in the cache
          store.writeQuery({ 
            query: MESSAGE_LIST_QUERY,
            data: data,
            variables: {
              id: this.props.channel_id,
            }
          });
          
          this.setState({ content: '' });
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
            value={this.state.content}
            placeholder={`Message #${this.props.channel_name}`}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
};

export default graphql(CREATE_MESSAGE_MUTATION)(AddMessage);