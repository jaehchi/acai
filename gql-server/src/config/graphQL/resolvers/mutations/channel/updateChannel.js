import { getUserID } from '../../../../utils/jwt';

export const updateChannel = async (parent, { id, name, topic }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const { owner } = await ctx.db.query.channel({ where: { id } }, `{ id owner { id }}`);

  if ( owner.id !== userID ) {
    throw new Error('Only owner can edit channels');
  } 

  return await ctx.db.mutation.updateChannel({ where: { id }, data: { name, topic } }, info);
};