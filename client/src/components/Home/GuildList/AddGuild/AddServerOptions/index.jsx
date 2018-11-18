

import React from 'react';

const AddServer = ({ switchModal }) => {
  return (
    <div>
      <h1 className="create-header">OH, another server huh?</h1>
      <div className="ag-create">
        <div className="create-action">
          <h2>Create</h2>
          <p>Create a new server and invite friends</p>
          <button className="ag-button" onClick={switchModal}>Create a Server</button>
      </div>
      </div>
    </div>
  );
}

export default AddServer;