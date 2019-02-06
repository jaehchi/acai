import { getUserID } from '../../../../utils/jwt';

export const deleteUser = async (parent, args, ctx, info) => {
  const userID = getUserID(ctx.request);

  return await ctx.db.mutation.deleteUser({ where: { id: userID }}, info);
};