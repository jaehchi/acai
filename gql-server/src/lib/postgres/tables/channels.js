import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createChannelTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS channels 
      (
        channel_id VARCHAR(200) UNIQUE NOT NULL,
        channelname VARCHAR(200) NOT NULL,
        guild_id VARCHAR(200) UNIQUE NOT NULL,
        owner_id VARCHAR(200) UNIQUE NOT NULL,
        type INT NOT NULL,

        CONSTRAINT channels_pk 
          PRIMARY key(channel_id),
        CONSTRAINT fk_guilds_owner_id
          FOREIGN KEY(owner_id) REFERENCES users(user_id)
      )
      `
    );
    success('created channels table');
  } catch (err) {
    error('failed to drop channels table -', err);
  }
};

export const dropChannelTable = async () => {
  try {
    await db.queryAsync(
      `
      DROP TABLE IF EXISTS channels
      `
      );
      warning('dropped channels table');
  } catch (err) {
    error('failed to drop channels table -', err);
  }
};
