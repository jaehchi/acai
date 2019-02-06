import { getUserID } from '../../../../utils/jwt';

export const deleteGuild = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const where = { id };
  const { owner } = await ctx.db.query.guild({ where }, `{ owner { id }}`);


  if ( owner.id !== userID ) {
    throw new Error('You must be an owner to delete guild');
  }

  return ctx.db.mutation.deleteGuild({ where }, info);
};