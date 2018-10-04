import server from './config/graphQL';
import { success } from './lib/logger'

const PORT = process.env.PORT || 4000;

server.start( () =>  {
  success(`Server is running on http://localhost:${PORT}`);
});

export default server;