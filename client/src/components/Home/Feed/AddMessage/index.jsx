import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
      const data = await this.props.mutate({
        variables: {
          id: this.props.channel.id,
          content: this.state.content
        }
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    } 
  }

  render() {  
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="content"
          placeholder={`Message #${this.props.channel.name}`}
          onChange={this.onChange}
        />
      </form>
    );
  }
};

const AddMessageMutation = gql`
  mutation AddMessageMutation ($id: ID!, $content: String!) {
    createMessage(id: $id, content: $content) {
      id 
      content
    }
  }
`;

export default graphql(AddMessageMutation)(AddMessage);