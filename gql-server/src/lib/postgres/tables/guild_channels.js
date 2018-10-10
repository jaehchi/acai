import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createGuildChannelTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS guild_channels
      (
        guilds_channels_id VARCHAR(200) UNIQUE NOT NULL,
        channel_id VARCHAR(200) UNIQUE NOT NULL,
        guild_id VARCHAR(200) NOT NULL,

        CONSTRAINT guild_channels_pk 
          PRIMARY key(guilds_channels_id),
        CONSTRAINT fk_guilds_channels_channel_id
          FOREIGN KEY(channel_id) REFERENCES channels(channel_id),
        CONSTRAINT fk_guilds_channels_guild_id
          FOREIGN KEY(guild_id) REFERENCES guilds(guild_id)
      )
      `
    );
    success('created guild-channels table');
  } catch (err) {
    error('failed to drop guild-channels table -', err);
  }
};

export const dropGuildChannelTable = async () => {
  try {
    await db.queryAsync(
      `
      DROP TABLE IF EXISTS guild_channels
      `
      );
      warning('dropped guild-channels table');
  } catch (err) {
    error('failed to drop guild-channels table -', err);
  }
};
