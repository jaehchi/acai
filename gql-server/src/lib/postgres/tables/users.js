import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
        (
          id VARCHAR(200) UNIQUE NOT NULL,
          username VARCHAR(200) UNIQUE NOT NULL,
          email VARCHAR(600) UNIQUE NOT NULL,
          CONSTRAINT users_pk
            PRIMARY KEY(id)
        )
      `
    );
    success('created users table');
  } catch (err) {
    error('error creating users table -', err);
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS users'
    );
    warning('dropped users table');
  } catch(err) {
    error('failed to drop users table -', err);
  }
};