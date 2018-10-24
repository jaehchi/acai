import { getUserID } from '../../../../utils/jwt';

export const createGuild = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const guild = await ctx.db.mutation.createGuilds({
    data: {
      ...args,
      owner: {
        connect: {
          id: userID,
        },
      }
    }
  }, info ); 

  const autoJoinUponCreation = await joinGuild(parent, { guildID: guild.id, userID, }, ctx, info);

  return guild;
};

export const joinGuild = async (parent, { guildID, userID }, ctx, info) => {
  return await ctx.db.mutation.createMembers({
    data: {
      guilds : {
        connect : {
          id: guildID
        }
      },
      users : {
        connect: {
          id: userID
        }
      }
    }
  }, info);
};