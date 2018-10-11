export default (parent, { guildname, owner }, ctx, info) => {
  return ctx.db.mutation.createGuilds({
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