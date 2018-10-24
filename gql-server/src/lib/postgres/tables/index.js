require('dotenv').config();
import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success(`created db: ${database}`);
  } catch (err) {
    error('failed to create db -', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );

    warning(`dropped db: ${database}`);
  } catch(err) {
    error('failed to drop db -', err);
  }
};

