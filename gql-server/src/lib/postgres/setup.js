import { createDatabase, dropDatabase } from './tables';
import { createUserTable, dropUserTable } from "./tables/users";
import { createGuildTable, dropGuildTable } from "./tables/guilds";
import { createChannelTable, dropChannelTable } from "./tables/channels";
import { createCredentialTable, dropCredentialTable } from "./tables/credentials";
import { createGuildChannelTable, dropGuildChannelTable } from "./tables/guild_channels";

const setup = async (err) => {
  // await dropDatabase();
  await dropUserTable();
  await dropCredentialTable();
  await dropGuildTable();
  await dropChannelTable();
  await dropGuildChannelTable();

  // await createDatabase();
  await createUserTable();
  await createCredentialTable();
  await createGuildTable();
  await createChannelTable();
  await createGuildChannelTable();
  
  if (err) {
    console.log('setup err' , err)
  }
  process.exit();
}

setup();