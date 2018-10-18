export default async (parent, { id }, ctx, info) => {
  return await ctx.db.query.users({ 
    where: { id, } 
  }, 
    info
  );
};