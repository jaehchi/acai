export default async (parent, { id }, ctx, info) => {
  return await ctx.db.query.guilds({
    where : {
      id,
    }
  }, info );
};