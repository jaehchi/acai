import { getUserID } from '../../../utils/jwt';

export const joinGuild = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  return await ctx.db.mutation.updateGuild({
    where: {
      id,
    },
    data : {
      members: {
        connect: {
          id: userID
        }
      }
    }
  }, info );
};