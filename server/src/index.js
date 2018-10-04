import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
type Query {
  info: String!
}
`

// 2
const resolvers = {
  Query: {
    info: () => `Simple GraphQL API`
  }
}

// 3
export const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

server.start( () =>  {
  console.log(`Server is running on http://localhost:${PORT}`);
});