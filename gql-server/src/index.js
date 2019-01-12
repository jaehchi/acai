import server from './config/graphQL';
import { success } from './lib/logger'


const PORT = process.env.PORT || 4000;

const options = {
  port: PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) =>  {
  success(`Server is running on http://localhost:${port}`);
});

export default server;