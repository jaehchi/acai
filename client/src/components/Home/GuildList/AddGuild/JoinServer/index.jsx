import React from 'react';

const CreateServer = ({ joinModal }) => {
  return (
    <div>
      <h1>Join a server</h1>
      <input type="text"></input>
      <button onClick={joinModal}>Back</button>
  </div>
  );
}

export default CreateServer;