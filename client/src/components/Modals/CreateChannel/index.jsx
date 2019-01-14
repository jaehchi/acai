import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import CREATE_CHANNEL_MUTATION from '../../../graphQL/mutations/CreateChannel.graphql';
import CHANNEL_LIST_QUERY from '../../../graphQL/queries/ChannelList.graphql';
import './createChannelModal.sass';

class CreateChannel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: 'Text Channel'
    };

    this.onChange = this.onChange.bind(this);
    this.changeType = this.changeType.bind(this);
    this.toggleCreateChannel = this.toggleCreateChannel.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeType (e) {
    if ( typeof e === 'string' ) {
      this.setState({
        type: e
      })
    } else {
      this.setState({
        type: e.target.name
      });
    }
  }

  toggleCreateChannel () {
    this.props.toggleModal();
  }

  render() {
    // console.log(this.props)
    const variables = { 
      id: this.props.id, 
      type: this.state.type === "Text Channel" ? 0 : 1,
      name: this.state.name
    };
    return (
      <div className="create__channel">
        <div className="cc-header">
          <h1>{`Create ${this.state.type}`}</h1>
          <p>{`in ${this.props.name}`}</p>
        </div>

        <div className="cc-form">
          <div className="cc-input">
            <h5>channel name</h5>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
            />
          </div>
          <div>
            <h5>Channel Types</h5>
            <div className={`cc-checkbox-wrapper ${this.state.type === 'Text Channel' ? 'cb-active' : 'cb-notActive'}`} onClick={() => { this.changeType("Text Channel")}}>
              <label className="cc-checkbox">
                <input  
                  type="checkbox"
                  name="Text Channel"
                  checked={this.state.type === 'Text Channel' ? true : false} 
                  onChange={this.changeType}
                />
                <div className="checkmark"></div>
              </label>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path className="foreground-SshK2E" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)">
                </path>
              </svg>
              Text Channel
              </div>
            </div>
            <div className={`cc-checkbox-wrapper ${this.state.type === 'Voice Channel' ? 'cb-active' : 'cb-notActive'}`} onClick={() => { this.changeType("Voice Channel")}}>
              <label className="cc-checkbox">
                <input  
                  type="checkbox"
                  name="Voice Channel"
                  checked={this.state.type === 'Voice Channel' ? true : false} 
                  onChange={this.changeType}
                />
                <div className="checkmark"></div>
              </label>
              <div>
              <svg name="Speaker"  width="16" height="16" viewBox="0 0 16 16">
                <path  fill="currentColor" d="M9.33333333,2 L9.33333333,3.37333333 C11.26,3.94666667 12.6666667,5.73333333 12.6666667,7.84666667 C12.6666667,9.96 11.26,11.74 9.33333333,12.3133333 L9.33333333,13.6933333 C12,13.0866667 14,10.7 14,7.84666667 C14,4.99333333 12,2.60666667 9.33333333,2 L9.33333333,2 Z M11,7.84666667 C11,6.66666667 10.3333333,5.65333333 9.33333333,5.16 L9.33333333,10.5133333 C10.3333333,10.04 11,9.02 11,7.84666667 L11,7.84666667 Z M2,5.84666667 L2,9.84666667 L4.66666667,9.84666667 L8,13.18 L8,2.51333333 L4.66666667,5.84666667 L2,5.84666667 L2,5.84666667 Z">
                </path>
              </svg>
                Voice Channel
              </div>
            </div>
          </div>
        </div>
        <div className="cc-footer">
          <button className="cc-cancel" onClick={this.toggleCreateChannel}>
            <span>Cancel</span>
          </button>
          <Mutation 
            mutation={CREATE_CHANNEL_MUTATION} 
            variables={variables}
            update={(store, { data: { createChannel} }) => {
              const data = store.readQuery({
                query: CHANNEL_LIST_QUERY,
                variables: { id: this.props.match.params.guild_id },
              })

              for ( let i = 0; i < data.channels.length; i++ ) {
                if ( data.channels[i].id === this.props.id ) {
                  data.channels[i].children.push(createChannel);
                }
              }
              store.writeQuery({
                query: CHANNEL_LIST_QUERY,
                data,
                variables: { id: this.props.match.params.guild_id },
              });

              this.props.history.push(`${this.props.match.url}/${createChannel.id}`);
              this.props.toggleModal();

            }}
          >
            { createChannelMutation => ( <button onClick={createChannelMutation} className='cc-create'>Create Channel</button> )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateChannel);