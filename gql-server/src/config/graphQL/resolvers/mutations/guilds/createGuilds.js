export default (parent, { guildname, owner }, ctx, info) => {
  return ctx.db.mutation.createGuilds({
    data: {
      guildname,
      owner,
      
    }
  }, info ); 
};