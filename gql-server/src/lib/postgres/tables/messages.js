import db from '../../../config/db/psql';
import { success, error, warning } from '../../logger';

export const createMessageTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS messages 
      (
        id VARCHAR(200) UNIQUE NOT NULL,

        author VARCHAR(200) NOT NULL,
        channel VARCHAR(200) NOT NULL,
        content VARCHAR(200) NOT NULL,

        CONSTRAINT messages_pk 
          PRIMARY key(id),
        CONSTRAINT fk_messages_author
          FOREIGN KEY(author) REFERENCES users(id),
        CONSTRAINT fk_messages_channel
          FOREIGN KEY(channel) REFERENCES channels(id)
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
