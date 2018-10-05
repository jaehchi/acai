import { 
  createDatabase,
  dropDatabase,
} from '../../../lib/postgres';

const setup = async (err) => {
  await dropDatabase();

  await createDatabase();

  if (err) {
    console.log('setup err' , err)
  }
  process.exit();
}

setup();