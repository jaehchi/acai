
import React from 'react';

import './channelNav.sass';

const ChannelNav = ({ name }) => {
  return (
    <div className="channelNav">{name}</div>
  );
};

export default ChannelNav;