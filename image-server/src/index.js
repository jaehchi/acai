import express from 'express';
import { createServer } from 'http';
import { join } from 'path';

import App from './config/express';

const app = App.express;

app.use('/',  express.static(join(__dirname, './uploads/guild/avatar')));

const server = createServer( app );
const PORT = process.env.PORT || 3100;

server.listen( PORT, err => {
  if (err) { throw new Error; }
  console.log(`Server is now listening on PORT: ${PORT}`);
});


export default server;