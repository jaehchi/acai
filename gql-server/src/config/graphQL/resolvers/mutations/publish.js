export default (parent, { id }, ctx, info) => {
  return ctx.db.mutation.updatePost(
    {
      where: { id },
      data: { published: true },
    },
    info,
  )
};