export default async (parent, args, ctx, info) => {
  return await ctx.db.query.userses({}, info);
};