import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createGuildTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS guilds 
      (
        id VARCHAR(200) UNIQUE NOT NULL,
        guildname VARCHAR(200) NOT NULL,
        owner VARCHAR(200),

        CONSTRAINT guilds_pk 
          PRIMARY key(id),
        CONSTRAINT fk_guilds_owner
          FOREIGN KEY(owner) REFERENCES users(id)
      )
      `
    );
    success('created guilds table');
  } catch (err) {
    error('failed to drop guilds table -', err);
  }
};

export const dropGuildTable = async () => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS guilds'
    );
    warning('dropped guilds table');
  } catch(err) {
    error('failed to drop guilds table -', err);
  }
};
