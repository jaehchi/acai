import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createMessageTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS messages 
      (
        message_id VARCHAR(200) UNIQUE NOT NULL,

        author VARCHAR(200) NOT NULL,
        channel_id VARCHAR(200) NOT NULL,
        content VARCHAR(200) NOT NULL,

        CONSTRAINT messages_pk 
          PRIMARY key(message_id),
        CONSTRAINT fk_messages_author
          FOREIGN KEY(author) REFERENCES users(id),
        CONSTRAINT fk_messages_channel_id
          FOREIGN KEY(channel_id) REFERENCES channels(channel_id)
      )
      `
    );
    success('created messages table');
  } catch (err) {
    error('failed to drop messages table -', err);
  }
};

export const dropMessageTable = async () => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS messages'
    );
    warning('dropped messages table');
  } catch(err) {
    error('failed to drop messages table -', err);
  }
};
