export default (parent, { username, email }, ctx, info) => {
  return ctx.db.mutation.createUsers({
    data: {
      username,
      email,
    }
  },
    info,
  );
};