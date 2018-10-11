import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createGuildOwnerTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS guild_owners
      (
        guild_owners_id VARCHAR(200) UNIQUE NOT NULL,
        user_id VARCHAR(200) UNIQUE NOT NULL,
        guild_id VARCHAR(200) NOT NULL,

        CONSTRAINT guild_owners_pk 
          PRIMARY key(guild_owners_id),
        CONSTRAINT fk_guild_owners_user_id
          FOREIGN KEY(user_id) REFERENCES user(id),
        CONSTRAINT fk_guild_owners_guild_id
          FOREIGN KEY(guild_id) REFERENCES guilds(guild_id)
      )
      `
    );
    success('created guild-owners table');
  } catch (err) {
    error('failed to drop guild-owners table -', err);
  }
};

export const dropGuildOwnerTable = async () => {
  try {
    await db.queryAsync(
      `
      DROP TABLE IF EXISTS guild_owners
      `
      );
      warning('dropped guild-owners table');
  } catch (err) {
    error('failed to drop guild-owners table -', err);
  }
};
