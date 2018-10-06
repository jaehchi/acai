require('dotenv').config();
import db from '../../config/db/psql';
import { success, error, warning } from '../logger';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;


// Database
export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `
      CREATE DATABASE ${database}`
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

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
        (
          id VARCHAR(40) UNIQUE NOT NULL,
          username VARCHAR(20) UNIQUE NOT NULL,
          email VARCHAR(60) UNIQUE NOT NULL,
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
    warning('dropped user table');
  } catch(err) {
    error('failed to drop user table -', err);
  }
};
