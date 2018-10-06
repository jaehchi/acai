export default (parent, { id }, ctx, info) => {
  return ctx.db.query.user({ where: { id: id } }, info)
};