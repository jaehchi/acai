import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './components/App';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql'
  }),
  cache: new InMemoryCache()
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('app')
);