import { hashPassword, comparePasswords } from '../../../../utils/bcrypt';
import { generateToken } from '../../../../utils/jwt';

export const signup = async (parent, args, ctx, info) => {

  const password = await hashPassword(args.password);
  
  const user = await ctx.db.mutation.createUsers({
    data: {
      ...args,
      password
    }
  }, `{ id email username}`);
  
  const token = await generateToken(user.id);

  return { 
    token,
    user
  };
};

export const login = async (parent, { email, password }, ctx, info) => {
  const user = await ctx.db.query.users({
    where: {
      email,
    } 
  }, ` { id password } `);

  if (!user) {
    throw new Error('No user found');
  }

  const isValid = await comparePasswords(password, user.password);

  if (!isValid) {
    throw new Error('Invalid password');
  }

  const token = await generateToken(user.id);

  return {
    token,
    user,
  }
}