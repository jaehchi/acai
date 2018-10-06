export default (parent, { id }, ctx, info) => {
  return ctx.db.mutation.deletePost({ where: { id } }, info)
};