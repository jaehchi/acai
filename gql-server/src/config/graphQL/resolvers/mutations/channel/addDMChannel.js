import { getUserID } from '../../../../utils/jwt';

export const addDMChannel = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  return await ctx.db.mutation.updateChannel({
    where: { id },
    data: {
      activeUsers: {
        connect: { id: userID }
      }
    }
  }, info);
};