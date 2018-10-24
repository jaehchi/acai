
import express from 'express';
import { resolve, join } from 'path';



const server = express();
const PORT = process.env.PORT || 3000

server.use(express.static(join(__dirname, '../client/public')));

server.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '../client/public/index.html'))
});

server.listen(PORT, () => {
  console.log('Server serving static files on PORT', PORT);
});
