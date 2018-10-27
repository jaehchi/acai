import { getUserID } from '../../../utils/jwt';

export const createGuild = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  console.log(userID)
  const guild = await ctx.db.mutation.createGuild({
    data: {
      ...args,
      owner: {
        connect: {
          id: userID,
        }
      },
      members: {
        connect: {
          id: userID
        }
      }
    }
  }, info ); 

  return guild;
};