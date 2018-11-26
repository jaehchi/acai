import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';

import router from '../../routes';

const middleware = [
  helmet(),
  json(),
  urlencoded({ extended: true }),
  cors({
		allowedHeaders: 'Content-Type, authorization',
		methods: ['GET, POST, PUT, DELETE', 'OPTIONS']
	}),
];

class App {
  constructor() {
    this.express = express();
    this.mountMiddleware();
    this.mountRoutes();
  }

  mountMiddleware() {
    this.express.use(...middleware);
  }

  mountRoutes() {
    this.express.use('/api', router);
  }
};

export default new App();
