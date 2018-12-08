import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import AddChannelModal from '../AddChannelModal';

import './category.sass';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { channel, guild_id, match } = this.props;

    return (
      <div>
        <div className="category" >
          <svg width="10px" height="10px" viewBox="0 0 451.846 451.847" >
            <g>
              <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
            </g>
          </svg>
          <div>{channel.name}</div>
          <AddChannelModal  id={channel.id} name={channel.name}/>
        </div>
      </div>
    );
  }
};

export default Category;