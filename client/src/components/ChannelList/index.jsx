import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Channel from '../Channel';
import Category from '../Category';
import ChannelNav from '../ChannelNav';
 
import './channelList.sass';

const  ChannelList = ({ channels = [], match }) => {
  return  (
    <div>
      {
        channels.length > 0 ? ( <ChannelNav name={channels[0].belongsTo.name}/> )  : null
      }
      <div>
        
      </div>
      <ul className="channels">
        {
          channels && channels.map((category) => {
            return (
              <div key={category.id} className="test">
                {
                  category.type === 4 ?  <Category category={category}/> : <Channel 
                  key={category.id}
                  channel={category}
                  match={match}
                  />
                }
                {
                  category.children && category.children.map( channel => (
                    <Channel 
                    key={channel.id}
                    channel={channel}
                    match={match}
                    />
                    ))
                  }
              </div>
            );
          }
          )
        }
      </ul>

    </div>

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