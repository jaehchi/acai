import { hashPassword, comparePasswords } from '../../../../utils/bcrypt';
import { generateToken } from '../../../../utils/jwt';

export const signup = async (parent, args, ctx, info) => {
  console.log(args)
  const password = await hashPassword(args.password);
  
  const user = await ctx.db.mutation.createUsers({
    data: {
      ...args,
      password
    }
  }, `{ id }`);
  
  const token = await generateToken(user.id);

  return {
    token,
    user
  }
};

export const login = async (parent, args, ctx, info) => {
  const user = await context.db.query.users({
    where: {
      email: args.email 
    } 
  }, ` { id password } `);

  if (!user) {
    throw new Error('No user found')
  }

  // 2
  const valid = await comparePasswords(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = await generateToken(user.id);

  // 3
  return {
    token,
    user,
  }
}