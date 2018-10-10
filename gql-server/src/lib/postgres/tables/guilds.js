import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createGuildTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS guilds 
      (
        guild_id VARCHAR(200) UNIQUE NOT NULL,
        guildname VARCHAR(200) UNIQUE NOT NULL,
        owner_id VARCHAR(200) UNIQUE NOT NULL,

        CONSTRAINT guilds_pk 
          PRIMARY key(guild_id),
        CONSTRAINT fk_guilds_owner_id
          FOREIGN KEY(owner_id) REFERENCES users(user_id)
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
