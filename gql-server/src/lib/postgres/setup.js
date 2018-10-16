import { createDatabase, dropDatabase } from './tables';
import { createUserTable, dropUserTable } from "./tables/users";
import { createGuildTable, dropGuildTable } from "./tables/guilds";
import { createChannelTable, dropChannelTable } from "./tables/channels";
import { createCredentialTable, dropCredentialTable } from "./tables/credentials";
import { createMessageTable, dropMessageTable } from './tables/messages';
import { createGuildMemberTable, dropGuildMemberTable } from './tables/guild_members';
import { createGuildChannelTable, dropGuildChannelTable } from "./tables/guild_channels";
import { createGuildOwnerTable, dropGuildOwnerTable } from './tables/guild_owners';

const setup = async (err) => {
  // await dropDatabase();
  // await dropMessageTable();
  // await dropGuildChannelTable();
  await dropGuildMemberTable();
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
  await createGuildMemberTable();
  // await createChannelTable();
  // await createGuildChannelTable();
  // await createMessageTable();
  
  if (err) {
    throw new Error(err);
  }
  process.exit();
}

setup();