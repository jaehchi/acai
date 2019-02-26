import { Prisma } from './generated/prisma';
import randomColor from 'randomcolor';
import { hashPassword } from '../../utils/bcrypt';

const db = new Prisma({ 
  endpoint: process.env.PRISMA_ENDPOINT,
  seceret: process.env.PRISMA_SECRET
});

// mockData

const users = [
  {
    username: "jae",
    password: "jae",
    email: "jae@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "Online"
  },
  {
    username: "alicia",
    password: "alicia",
    email: "alicia@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "Online"
  },
  {
    username: "kevin",
    password: "kevin",
    email: "kevin@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "Online"
  },
  {
    username: "dan",
    password: "dan",
    email: "dan@gmail.com",
    avatar: randomColor({ luminosity: 'light', hue: 'random' }),
    status: "Online"
  }
];

const guild = {
  name: "dota2",
  avatar: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855luna.jpg"
};

//helpers
const addFriend = async (user, friend1) => {
  await db.updateUser({ 
    where: { id: user.id },
    data: { 
      friends: {
        connect: {
          id: friend1.id
        }
      }
    }
  });
};


const createDMChannel = async (user1, user2) => {
  await db.createChannel({ 
    type: 1,
    recipients: {
      connect: [{ id: user1.id }, { id: user2.id }]
    }
  })
};


export const createUsers = async () => {
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
    console.log('create user error', e);
  }
};

export const createGuilds = async () => {
  try {
    const defaultChannels = {
      create: {
        type: 4,
        name: 'Text Channel', 
        position: 0,
      
        children: {
          create: {
            type: 0, 
            position: 0,
            name: 'general',
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
        connect: [ { id: users[0].id }, { id: users[1].id }, { id: users[2].id }, { id: users[3].id } ]
      },
      channels: defaultChannels
    });

  } catch (e) {
    console.log('Create Guild error', e);
  }
};



export const addFriends = async () => {
  try { 
    await addFriend(users[0], users[1]);
    await addFriend(users[0], users[2]);
    await addFriend(users[0], users[3]);
    await addFriend(users[1], users[0]);
    await addFriend(users[1], users[2]);
    await addFriend(users[2], users[0]);
    await addFriend(users[2], users[1]);
    await addFriend(users[3], users[0])
  } catch (e) {
    console.log('Add Friends Error,', e);
  }
};


export const createDMChannels = async () => {
  try {
    await createDMChannel(users[0], users[1]);
    await createDMChannel(users[0], users[2]);
    await createDMChannel(users[1], users[2]);
    await createDMChannel(users[0], users[3])
  } catch (e) {
    console.log('Create DM Channel Error', e);
  }
};