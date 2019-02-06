import { getUserID } from '../../../../utils/jwt';

export const deleteChannel = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const { owner } = await ctx.db.query.channel({ where: { id } }, `{ id owner { id }}`);

  if ( owner.id !== userID ) {
    throw new Error(`Only guild owner can delete channels`);
  }

  return await ctx.db.mutation.deleteChannel({ where: { id }}, info);
};