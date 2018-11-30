import { getUserID } from '../../../utils/jwt';

export const createGuild = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  console.log(args);
  return await ctx.db.mutation.createGuild({
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
      },
      channels: {
        create: {
          type: 4,
          name: 'Text Channels',
          channels: {
            create: {
              type: 0,
              name: 'general',
            }
          }
        }
      }
    },
  }, info );
};