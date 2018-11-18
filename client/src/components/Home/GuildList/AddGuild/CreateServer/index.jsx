import React from 'react';

const CreateServer = ({ switchModal }) => {
  return (
    <div>
      <h1>Create a server</h1>
      <div>Servername</div>
      <input type="text"></input>
      <button onClick={switchModal}>Back</button>
  </div>
  );
}

export default CreateServer;