import React from 'react';

import Channel from '../Channel';
import Category from '../Category';

import './channelList.sass';

const ChannelList = ({ categories, match }) => {
  console.log(categories)
  return (
    <ul className="channels">
      {
        categories.map((category) => {
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
  );
};

export default ChannelList;