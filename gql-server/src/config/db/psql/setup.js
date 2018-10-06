import { 
  createDatabase,
  dropDatabase,
  createUserTable,
  dropUserTable,
} from '../../../lib/postgres';

const setup = async (err) => {
  await dropDatabase();
  await dropUserTable();

  await createDatabase();
  await createUserTable();
  
  if (err) {
    console.log('setup err' , err)
  }
  process.exit();
}

setup();