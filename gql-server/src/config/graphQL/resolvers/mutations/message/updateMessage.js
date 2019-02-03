import { getUserID } from '../../../../utils/jwt';

export const updateMessage = async (parent, { id, content }, ctx, info) => {
  const userID = getUserID(ctx.request);
  const where = { id, };

  const { author } = ctx.db.query.message({ where, }, `author { id }`);

  if ( author.id !== userID ) {
    throw new error(`only the author can edit their own messages`);
  } 

  return await ctx.db.mutation.updateMessage({ 
    where: {
      id,
    },
    data: {
      content,
    }
  }, info);
};