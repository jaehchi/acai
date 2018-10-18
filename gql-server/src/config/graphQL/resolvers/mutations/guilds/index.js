export const createGuild = async (parent, { guildname, owner }, ctx, info) => {
  return await ctx.db.mutation.createGuilds({
    data: {
      guildname,
      owner: {
        connect: {
          id: owner
        },
      }
    }
  }, info ); 
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