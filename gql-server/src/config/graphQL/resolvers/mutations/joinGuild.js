import { getUserID } from '../../../utils/jwt';

export const joinGuild = async (parent, { guildID }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const data = await ctx.db.mutation.updateGuilds({
    where: {
      id: guildID
    },
    data : {
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

  return data;
};