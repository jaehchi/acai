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
            <div key={category.id}>
              <Category category={category}/>
              {
                category.channels.map( channel => (
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