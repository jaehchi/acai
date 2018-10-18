import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createMemberTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS members
      (
        id VARCHAR(200) UNIQUE NOT NULL,
        user_id VARCHAR(200),
        guild_id VARCHAR(200),

        CONSTRAINT members_pk 
          PRIMARY key(id),
        CONSTRAINT fk_members_user_id
          FOREIGN KEY(user_id) REFERENCES users(id),
        CONSTRAINT fk_members_guild_id
          FOREIGN KEY(guild_id) REFERENCES guilds(id)
      )
      `
    );
    success('created members table');
  } catch (err) {
    error('failed to drop members table -', err);
  }
};

export const dropMemberTable = async () => {
  try {
    await db.queryAsync(
      `
      DROP TABLE IF EXISTS members
      `
      );
      warning('dropped members table');
  } catch (err) {
    error('failed to drop members table -', err);
  }
};
