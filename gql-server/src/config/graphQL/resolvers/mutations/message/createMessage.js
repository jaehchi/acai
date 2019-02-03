import { getUserID } from '../../../../utils/jwt';

export const createMessage = async (parent, { id, content }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  return await ctx.db.mutation.createMessage({
    data: {
      content,
      author: {
        connect: {
          id: userID
        }
      },
      channel: {
        connect: {
          id,
        }
      }
    }
  }, info);
};