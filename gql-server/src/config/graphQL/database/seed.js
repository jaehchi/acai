import { createUsers, createGuilds, addFriends, createDMChannels } from './seedHelpers';
 
const setup = async () => {
  await createUsers();
  await createGuilds();
  await addFriends();
  await createDMChannels();

  return;
}

setup();
