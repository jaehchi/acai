import { createDatabase, dropDatabase } from './tables';
import { createUserTable, dropUserTable } from "./tables/users";
import { createGuildTable, dropGuildTable } from "./tables/guilds";
import { createMemberTable, dropMemberTable } from './tables/members';
// import { createChannelTable, dropChannelTable } from "./tables/channels";
// import { createCredentialTable, dropCredentialTable } from "./tables/credentials";
// import { createMessageTable, dropMessageTable } from './tables/messages';
// import { createGuildChannelTable, dropGuildChannelTable } from "./tables/guild_channels";
// import { createGuildOwnerTable, dropGuildOwnerTable } from './tables/guild_owners';

const setup = async (err) => {
  // await dropDatabase();
  // await dropMessageTable();
  // await dropGuildChannelTable();
  await dropMemberTable();
  // await dropGuildOwnerTable();
  // await dropChannelTable();
  // await dropCredentialTable();
  await dropGuildTable();
  await dropUserTable();

  // await createDatabase();
  await createUserTable();
  await createGuildTable();
  // await createCredentialTable();
  // await createGuildOwnerTable();
  await createMemberTable();
  // await createChannelTable();
  // await createGuildChannelTable();
  // await createMessageTable();
  
  if (err) {
    throw new Error(err);
  }
  process.exit();
}

setup();