import { getUserID } from '../../../utils/jwt';

export const logout = async (parent, { lastSeenOn }, ctx, info) => {
  const userID = getUserID(ctx.request);

  return await ctx.db.mutation.user({
    where: {
      id: userID
    },
    data: {
      lastSeenOn
    }
  }, info);

};