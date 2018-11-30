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

    const { guild: { id, name, avatar, channels: [{ channels }] }} = this.props;
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
                src={`http://localhost:3100/${avatar}`} 
                onError={this.onBrokenImage} 
              /> : <p>{name[0]}</p>
          }
        </NavLink>
        <div className="g-selector"></div>
      </div>
    )
  }
};

export default GuildItem;