export default (parent, { guild_id, user_id }, ctx, info) => {
  return ctx.db.mutation.createGuild_members({
    data: {
      guild : {
        connect : {
          id: guild_id
        }
      },
      user : {
        connect: {
          id: user_id
        }
      }
    }
  }, info);
};