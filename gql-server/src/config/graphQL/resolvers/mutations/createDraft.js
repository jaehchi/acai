export default (parent, { title, content }, ctx, info) => {
  return ctx.db.mutation.createPost(
    {
      data: {
        title,
        content,
      },
    },
    info,
  );
}