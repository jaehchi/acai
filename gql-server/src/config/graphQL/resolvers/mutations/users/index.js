export const createUser = async (parent, { username, email }, ctx, info) => {
  return await ctx.db.mutation.createUsers({
    data: {
      username,
      email,
    }
  }, info );
};

