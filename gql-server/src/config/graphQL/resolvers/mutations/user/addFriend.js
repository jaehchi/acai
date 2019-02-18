import { getUserID } from '../../../../utils/jwt';

export const addFriend = async (parent, { friend_id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  const friend = await ctx.db.mutation.updateUser({
    where: { id: friend_id },
    data: {
      friends: {
        connect: {
          id: userID
        }
      }
    }
  }, `{ id }`);

  const user = await ctx.db.mutation.updateUser({ 
    where: { id: userID },
    data: { 
      friends: {
        connect: {
          id: friend_id 
        },
      }
    }
  }, info);

  await ctx.db.mutation.createChannel({
    data: {
      type: 1,
      recipients: {
        connect: [{ id: user.id }, { id: friend.id }]
      }
    }
  })

  return user;
};