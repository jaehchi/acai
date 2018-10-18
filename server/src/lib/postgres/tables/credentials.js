import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createCredentialTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS credentials
        (
          credential_id VARCHAR(200) UNIQUE NOT NULL,
          user_id VARCHAR(200) UNIQUE NOT NULL,
          password VARCHAR(200) NOT NULL,
          
          CONSTRAINT fk_guilds_user_id
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
      `
    );
    success('created credentials table');
  } catch (err) {
    error('error creating credentials table -', err);
  }
};

export const dropCredentialTable = async () => {
   try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS credentials'
    );
    warning('dropped credentials table');
  } catch(err) {
    error('failed to drop credentials table -', err);
  }
}