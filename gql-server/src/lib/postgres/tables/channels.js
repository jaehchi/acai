import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createChannelTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS channels 
      (
        id VARCHAR(25) UNIQUE NOT NULL,
        type INT NOT NULL,
        channelname VARCHAR(60) NOT NULL,
        guild_id VARCHAR(25),
  
        CONSTRAINT channels_pk 
          PRIMARY key(id),
        CONSTRAINT fk_channels_guild_id
          FOREIGN KEY(guild_id) REFERENCES guilds(id)
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
