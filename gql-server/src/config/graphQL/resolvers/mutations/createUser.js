export default (parent, { username, email }, ctx, info) => {
  return ctx.db.mutation.createUser(
    {
      data: {
        username,
        email,
      },
    },
    info,
  );
};