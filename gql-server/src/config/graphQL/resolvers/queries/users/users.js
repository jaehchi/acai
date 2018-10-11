export default (parent, args, ctx, info) => {
  return ctx.db.query.users({ }, info);
};