import { getUserID } from '../../../../utils/jwt';

export const createDMChannel = async (parent, { friend_id, type, }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  return await ctx.db.mutation.createChannel({
    data: {
      type,
      recipients: {
        connect: [{ id: userID }, { id: friend_id }]
      }
    }
  }, info);
};