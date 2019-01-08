import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelEntry from '../ChannelEntry';
import Category from '../Category';
import ChannelNav from '../ChannelNav';
 
import './channelList.sass';

const ChannelList = ({ channels = [], guild_id, match }) => {

  return  (
    <ul className="channels">
      {
        channels && channels.map( channel => (
          <div key={channel.id} className="test">
            { channel.type === 4 ? <Category  channel={channel} match={match}/> : <ChannelEntry  channel={channel} match={match}/> }
            { channel.children && channel.children.map( child => ( <ChannelEntry key={child.id} channel={child} match={match} />)) }
          </div>
        ))
      }
    </ul>
  );
}

export default ChannelList;

//export const updatePos = ( arr, from, to ) => {
  // const list = arr .slice();

  // if ( to === from ) {
  //   return arr;
  // }

  // const target = list[from];
  // const increment = to < from ? -1 : 1;
  
  // for ( let i = from; i != to; i += increment ) {
  //   list[i] = list[ i + increment];
  // }
  
  // list[to] = target;
  // return list;