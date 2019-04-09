import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache, dataIdFromObject } from 'apollo-cache-inmemory';
import { setContext } from "apollo-link-context";
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import App from './components/App';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.access_token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/subscriptions`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.access_token,
    },
  },
})

const httpLink = createHttpLink({
  uri: `http://localhost:4000/graphql`
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink),
);


const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: object => object.id,
  })
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('app')
);

