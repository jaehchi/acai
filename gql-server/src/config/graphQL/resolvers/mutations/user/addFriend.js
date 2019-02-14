import { getUserID } from '../../../../utils/jwt';

export const addFriend = async (parent, { friend_id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  await ctx.db.mutation.updateUser({
    where: { id: friend_id },
    data: {
      friends: {
        connect: {
          id: userID
        }
      }
    }
  }, info);

  return await ctx.db.mutation.updateUser({ 
    where: { id: userID },
    data: { 
      friends: {
        connect: {
          id: friend_id 
        },
      }
    }
  }, info);
};