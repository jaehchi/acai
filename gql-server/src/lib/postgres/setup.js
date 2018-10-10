import { createDatabase, dropDatabase } from './tables';
import { createUserTable, dropUserTable } from "./tables/users";
import { createGuildTable, dropGuildTable } from "./tables/guilds";
import { createChannelTable, dropChannelTable } from "./tables/channels";
import { createCredentialTable, dropCredentialTable } from "./tables/credentials";
import { createMessageTable, dropMessageTable } from './tables/messages';
// import { createGuildChannelTable, dropGuildChannelTable } from "./tables/guild_channels";

const setup = async (err) => {
  // await dropDatabase();
  await dropMessageTable();
  // await dropGuildChannelTable();
  await dropChannelTable();
  await dropGuildTable();
  await dropCredentialTable();
  await dropUserTable();

  // await createDatabase();
  await createUserTable();
  await createCredentialTable();
  await createGuildTable();
  await createChannelTable();
  // await createGuildChannelTable();
  await createMessageTable();
  
  if (err) {
    console.log('setup err' , err)
  }
  process.exit();
}

setup();