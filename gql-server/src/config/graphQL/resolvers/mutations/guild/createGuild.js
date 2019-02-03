import { getUserID } from '../../../../utils/jwt';

export const createGuild = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const defaultChannels = {
    create: {
      type: 4,    // category
      name: 'Text Channel', 
      position: 0,
      children: {
        create: {
          type: 0, // category default channel
          position: 0,
          name: 'general'
        }
      }
    }
  };
  
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
      channels: defaultChannels
    },
  }, info );
};