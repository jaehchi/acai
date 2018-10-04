require('dotenv').config();

import { Pool } from 'pg';
import Promise from 'bluebird';
import { success } from '../../lib/logs';

const config = {
  user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
  host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
  database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
  password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD,
  port: process.env.NODE_ENV === 'production' ? process.env.AWS_PORT : process.env.LOCAL_PORT,
  max: 10
};

const db = new Pool(config);

db.connect(err => {
  if (err) {
    throw err;
  } else {
    success('successfully connected to PostgreSQL:', config.database);
  }
});

Promise.promisifyAll(db);

export default db;