import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createGuildMemberTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS guild_members
      (
        id VARCHAR(200) UNIQUE NOT NULL,
        user_id VARCHAR(200),
        guild_id VARCHAR(200),

        CONSTRAINT guild_members_pk 
          PRIMARY key(id),
        CONSTRAINT fk_guild_members_user_id
          FOREIGN KEY(user_id) REFERENCES users(id),
        CONSTRAINT fk_guild_members_guild_id
          FOREIGN KEY(guild_id) REFERENCES guilds(id)
      )
      `
    );
    success('created guild-members table');
  } catch (err) {
    error('failed to drop guild-members table -', err);
  }
};

export const dropGuildMemberTable = async () => {
  try {
    await db.queryAsync(
      `
      DROP TABLE IF EXISTS guild_members
      `
      );
      warning('dropped guild-member table');
  } catch (err) {
    error('failed to drop guild-member table -', err);
  }
};
