import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

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

class App {
  constructor () {
    this.server = new GraphQLServer({
      typeDefs: './src/config/graphQL/schema/index.graphql',
      resolvers,
      context: req => ({
          ...req,
          db: new Prisma({
          typeDefs: './src/config/graphQL/schema/generated/prisma.graphql', // the generated Prisma DB schema
          endpoint: 'http://localhost:4466',          // the endpoint of the Prisma DB service
          secret: 'mysecret123',                    // specified in database/prisma.yml
          debug: true,                              // log all GraphQL queries & mutations
        }),
      }),
      resolverValidationOptions: {
        requireResolversForResolveType: false
      }
    });

    this.mountMiddleWare();
  }

  mountMiddleWare() {
    this.server.express.use(...middleware);
  }
}

export default new App().server;