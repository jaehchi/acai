// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './guildItem.sass';
class GuildItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.guild.avatar,
    }

    this.onBrokenImage = this.onBrokenImage.bind(this);
  }

  onBrokenImage (e) {
    this.setState({
      avatar: null, 
    })
  }

  render() {
    const { guild: { id, name, avatar, channels }} = this.props;
    return (
      <div className="guildItem">
        <Link to={`/${id}/${channels[0].id}`}>
          <div className="g-avatar">
            {
              this.state.avatar ? 
                <img 
                  src={avatar} 
                  onError={this.onBrokenImage.bind(this)} 
                /> : <span>{name[0]}</span>
            }
          </div>
        </Link>
      </div>
    )
  }
};

export default GuildItem;