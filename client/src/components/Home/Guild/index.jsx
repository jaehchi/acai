import React, { Component } from 'react';

class GuildItem extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.guild.guildname} 
        </div>
      </div>
    )
  }
}

export default GuildItem;