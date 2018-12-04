import React from 'react';
import { NavLink } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import hashtag from '../../../../../public/assets/hashtag.svg';

import './channel.sass';

const Channel = ({ channel: { id, name }, match, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
          <div key={id}>
            <NavLink to={`${match.url}/${id}`} className="channel" activeClassName="c-active">
              <img className="c-symbol" src={hashtag} alt=""/>
              <div className="c-name">{name}</div>
            </NavLink>
          </div>
        </div>
      )} 
   </Draggable>  
  );
};

export default Channel;