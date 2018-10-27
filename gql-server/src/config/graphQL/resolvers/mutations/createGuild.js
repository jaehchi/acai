import { getUserID } from '../../../utils/jwt';

export const createGuild = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const guild = await ctx.db.mutation.createGuilds({
    data: {
      ...args,
      owner: {
        connect: {
          id: userID,
        }
      },
      members: {
        create: {
          users: {
            connect: {
              id: userID
            }
          }
        }
      }
    }
  }, info ); 

  return guild;
};