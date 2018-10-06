export default (parent, args, ctx, info) => {
  return ctx.db.query.post({ where: { id: args.id } }, info)
};