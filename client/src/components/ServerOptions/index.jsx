import React from 'react';

import rocket from '../../../public/assets/rocket.svg'
import rockets from '../../../public/assets/rockets.svg';
import "./serverOptions.sass";

const ServerOptions = ({ createModal, joinModal }) => {
  return (
    <div className="server-options">
      <h1 className="server-header">OH, another server huh?</h1>
      <div className="so-options">
        <div className="so-action create">
          <h2>Create</h2>
          <p>Create a new server and invite your friends. It's free!</p>
          <img src={rocket} alt=""/>
          <button className="ag-button" onClick={createModal}>Create a Server</button>
        </div>
      </div>
      <div className="so-options">
        <div className="so-action join">
          <h2>Join</h2>
          <p>Enter an Instant Invite and join your friend's server!</p>
          <img src={rockets} alt=""/>
          <button className="ag-button" onClick={joinModal}>Join a Server</button>
        </div>
      </div>
    </div>
  );
}

ServerOptions

export default ServerOptions;

