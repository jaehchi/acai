import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../routes/';

const App = () => {
  return (
    <Switch>
      {
        routes.map( (route) => (
          <Route key={`route-${route.name}`} {...route}/>
        ))
      }
    </Switch>
  );
};

export default App;