import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import SVG from '../../globals/SVG';

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
              <SVG name={"hashtag"} width={16} height={16} viewBox={"0 0 16 16"} fill={"currentColor"}/>
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
              <SVG name={"speaker"} width={16} height={16} viewBox={"0 0 16 16"} fill={"currentColor"}/>
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