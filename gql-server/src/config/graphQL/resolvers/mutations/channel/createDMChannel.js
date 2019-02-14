import { getUserID } from '../../../../utils/jwt';

export const createChannel = async (parent, { id, type, name }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  return await ctx.db.mutation.createChannel({

  }, info)
};