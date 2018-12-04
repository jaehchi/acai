import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (arr, from , to) => {
  // const result = Array.from(list);
  // const [removed] = result.splice(startIndex, 1);
  // result.splice(endIndex, 0, removed);

  // return result;
  const list = arr .slice();

  if ( to === from ) {
    return arr;
  }

  const target = list[from];
  const increment = to < from ? -1 : 1;
  
  for ( let i = from; i != to; i += increment ) {
    list[i] = list[ i + increment];
  }
  
  list[to] = target;
  return list;
};

const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: 'none',
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'grey',

//   // styles we need to apply on draggables
//   ...draggableStyle,
// });

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250,
// });

class Members extends Component {
  constructor (props) {
    super(props);

  }
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div>
        asdf
      </div>
    );
  }
}

export default Members;