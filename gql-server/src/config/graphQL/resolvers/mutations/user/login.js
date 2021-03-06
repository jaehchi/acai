import { comparePasswords, hashPassword } from '../../../../utils/bcrypt';
import { generateToken } from '../../../../utils/jwt';

export const login = async (parent, { email, password }, ctx, info) => {
  const user = await ctx.db.query.user({
    where: {
      email,
    },
  }, ` { id password } `);

  if (!user) {
    throw new Error('No user found');
  }

  const isValid = await comparePasswords(password, user.password);


  if (!isValid) {
    throw new Error('Invalid password');
  }

  const isOnline = await ctx.db.mutation.updateUser({
    where: {
      id: user.id
    },
    data: {
      status: 'Online'
    }
  });

  const token = await generateToken(user.id);

  return {
    token,
    user,
  }
};