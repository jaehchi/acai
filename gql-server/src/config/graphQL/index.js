import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

// import resolvers from './resolvers';

const middleware = [
  helmet(),
  cors({
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT','DELETE', 'OPTIONS']
  }),
  json(),
  urlencoded( { extended: true } ),
]

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `Simple GraphQL API`
  }
}

class App {
  constructor () {
    this.server = new GraphQLServer({
      typeDefs,
      resolvers,
    });

    this.mountMiddleWare();
  }

  mountMiddleWare() {
    this.server.express.use(...middleware);
  }
}
// 3

export default new App().server;

