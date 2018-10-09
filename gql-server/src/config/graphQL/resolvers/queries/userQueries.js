export default (parent, { id }, ctx, info) => {
  return ctx.db.query.users({ where: { id: id } }, info)
};