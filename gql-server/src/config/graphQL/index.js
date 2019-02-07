import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import { json, urlencoded } from 'body-parser';

import resolvers from './resolvers';

const middleware = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  json(),
  urlencoded( { extended: true } ),
];

export const graphQLServer = new GraphQLServer({
  typeDefs: './src/config/graphQL/schema/index.graphql',
  resolvers,
  context: req => ({
      ...req,
      db: new Prisma({
      typeDefs: './src/config/graphQL/schema/generated/prisma.graphql',  // the generated Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT,                             // the endpoint of the Prisma DB service
      secret: process.env.PRISMA_SECRET,                                 // specified in database/prisma.yml
      debug: true,                                                       // log all GraphQL queries & mutations
    }), 
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  debug: true
});

class App {
  constructor () {
    this.server = graphQLServer;

    this.mountMiddleWare();
  }

  mountMiddleWare() {
    this.server.express.use(...middleware);
  }
}

export default new App().server;