import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import ChannelEntry from '../ChannelEntry';
import Category from '../Category';
 
import './channelList.sass';

const ChannelList = ({ channels = [],  match }) => {
  return  (
    <ul className="channels">
      {
        channels && channels.map( channel => (
          <div key={channel.id}>
            { channel.type === 4 ? <Category channel={channel} match={match}/> : <ChannelEntry channel={channel} match={match}/> }
            { channel.children && channel.children.map( child => ( <ChannelEntry key={child.id} channel={child} match={match}/> )) }
          </div>
        ))
      }
    </ul>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(propType(ChannelEntry.fragments.entry).isRequired),
};

export default ChannelList;