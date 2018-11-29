// import React from 'react';
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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
        <NavLink 
          to={`/${id}/${channels[0].id}`} 
          className="g-avatar" 
          activeClassName="g-active"
        >
          {
            this.state.avatar ? 
              <img 
                src={avatar} 
                onError={this.onBrokenImage} 
              /> : <span>{name[0]}</span>
          }
        </NavLink>
        <div className="g-selector"></div>
      </div>
    )
  }
};

export default GuildItem;