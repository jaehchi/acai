import { getUserID } from '../../../../utils/jwt';

export const createFriendRequest = async (parent, { username }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const doesUserExist = ctx.db.query.user({ where: { username }}, `{ id }`);

  if ( !doesUserExist ) {
    throw new Error('user does not exist');
  }
  
  return await ctx.db.mutation.createFriendRequest({
    data: {
      from: {
        connect: {
          id: userID,
        }
      },
      to: {
        connect: {
          username,
        }
      }
    }
  }, info);
};