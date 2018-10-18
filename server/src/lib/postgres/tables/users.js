import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
        (
          id VARCHAR(25) UNIQUE NOT NULL,
          username VARCHAR(60) UNIQUE NOT NULL,
          email VARCHAR(40) UNIQUE NOT NULL,
          password VARCHAR(200) NOT NULL,
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