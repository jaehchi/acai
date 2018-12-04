import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Channel from '../Channel';
import Category from '../Category';
import { categoriesQuery } from '../';

import './channelList.sass';

export const updatePos = ( arr, from, to ) => {
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
}

class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: this.props.categories
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.state.value > prevState.value) {
  //     this.foo();  
  //   }
  // }

  componentDidUpdate (prevProps) {
    if ( prevProps.match.params.guild_id !== this.props.match.params.guild_id ) {
      console.log("updating..")
        this.setState({
          channels: this.props.categories
        })
    }
  }

 onDragEnd ({ source, destination }) {
    if ( !destination ) {
      return;
    }

    const channels = updatePos(
      this.state.channels,
      source.index,
      destination.index,
    );


    this.setState({
      channels,
    });

    const test = this.props.mutate({
      variables: {
        id: this.props.match.params.guild_id,
        from: source.index,
        to: destination.index
      },
      update: (store, { data: { updateChannelPosition }}) => {
        // reads all messages in this specific channel from cache
        const data = store.readQuery({
          query: categoriesQuery,
          variables: {
            id: this.props.match.params.guild_id 
          } 
        });

        data.categories = updateChannelPosition
        // updates the all messages back in the cache
        store.writeQuery({ query: categoriesQuery, variables: {
          id: this.props.match.params.guild_id,
        }, data });

        console.log(this.props.categories)

      }
    });
  }
  
  render() {
    
        console.log(this.props.categories, 'wtiching components')

    return (
      <div className="channels">
        <DragDropContext onDragEnd={this.onDragEnd}> 
          <Droppable droppableId="droppable-channels">
            { (provided, snapshot) => (
                <div ref={provided.innerRef}>
                  {
                    this.state.channels.map((category, index) => {
                      return (
                        <div key={category.id} className="test">
                          { 
                            category.type === 4 ? <Category category={category} index={index}/> : 
                            <Channel 
                              key={category.id}
                              channel={category}
                              match={this.props.match}
                              index={index}
                            />
                          }
                          </div>
                      );
                    })
                  }
                </div>
              )
            }
          </Droppable>
        </DragDropContext>
      
    </div>
    );
  }
}

const updateChannelPositionMutation = gql`
  mutation ($id: ID! $from: Int!, $to: Int!) {
    updateChannelPosition(id: $id, from: $from, to: $to) {
      id
      name
      type
      position

      belongsTo {
        name
        owner { 
          id
          username
        }
      }

      children {
        id
        name
        type
        position
      }
    }
  }
`;

export default graphql(updateChannelPositionMutation)(ChannelList);



// <ul className="channels">
//         {
//           categories.map((category) => {
//             return (
//               <div key={category.id} className="test">
//                 {
//                   category.type === 4 ?  <Category category={category}/> : <Channel 
//                   key={category.id}
//                   channel={category}
//                   match={match}
//                   />
//                 }
//                 {
//                   category.children && category.children.map( channel => (
//                     <Channel 
//                     key={channel.id}
//                     channel={channel}
//                     match={match}
//                     />
//                     ))
//                   }
//               </div>
//             );
//           }
//           )
//         }
//       </ul>