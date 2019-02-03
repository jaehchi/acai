import { getUserID } from '../../../../utils/jwt';

export const deleteMessage = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const where = { id };

  const { author } = await ctx.db.query.message({ where }, `author { id }`);

  if ( author.id !== userID ) {
    throw new Error('only the author of the message can edit their messages');
  }

  return await ctx.db.mutation.deleteMessage({
    where,
  }, info)
  
};