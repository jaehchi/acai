import { createDatabase, dropDatabase } from './tables';
import { createUserTable, dropUserTable } from "./tables/users";
import { createGuildTable, dropGuildTable } from "./tables/guilds";
import { createMemberTable, dropMemberTable } from './tables/members';
import { createChannelTable, dropChannelTable } from "./tables/channels";
import { createMessageTable, dropMessageTable } from './tables/messages';


const setup = async (err) => {
  await dropMessageTable();
  await dropChannelTable();
  await dropMemberTable();
  await dropGuildTable();
  await dropUserTable();

  await createUserTable();
  await createGuildTable();
  await createMemberTable();
  await createChannelTable();
  await createMessageTable();
  
  if (err) {
    throw new Error(err);
  }
  process.exit();
}

setup();