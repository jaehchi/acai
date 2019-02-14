import { Prisma } from './generated/prisma';
import randomColor from 'randomcolor';
import { hashPassword } from '../../utils/bcrypt';

const db = new Prisma({ 
  endpoint: process.env.PRISMA_ENDPOINT,
  seceret: process.env.PRISMA_SECRET
});

const users = [
  {
    username: "jae",
    password: "jae",
    email: "jae@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "online"
  },
  {
    username: "alicia",
    password: "alicia",
    email: "alicia@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "online"
  },
  {
    username: "kevin",
    password: "kevin",
    email: "kevin@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "online"
  }
];

const guild = {
  name: "dota2",
  avatar: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855luna.jpg"
};

const createUsers = async () => {
  try {
    for ( let i = 0; i < users.length; i++ ) {
      let { username, password, email, avatar, status } = users[i];
      
      const user = await db.createUser({
        username,
        password: await hashPassword(password),
        email,
        avatar,
        status,
      });

      users[i].id = user.id;
    }
    
  } catch (e) {
    console.log(e);
  }
};

const createGuilds = async () => {
  try {
    const defaultChannels = {
      create: {
        type: 4,
        name: 'Text Channel', 
        position: 0,
        owner: {
          connect: {
            id: users[0].id
          }
        },
        children: {
          create: {
            type: 0, 
            position: 0,
            name: 'general',
            owner: {
              connect: {
                id: users[0].id
              }
            },
          }
        }
      }
    };

    
    const dota2 = await db.createGuild({
      ...guild,
      owner: {
        connect: {
          id: users[0].id
        }
      },
      members: {
        connect: [ { id: users[0].id }, { id: users[1].id }, { id: users[2].id } ]
      },
      channels: defaultChannels
    });

  } catch (e) {
    console.log(e);
  }
};

const setup = async () => {
  await createUsers();
  await createGuilds();

  return;
}

setup();
