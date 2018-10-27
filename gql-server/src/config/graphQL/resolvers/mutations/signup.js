import { hashPassword } from '../../../utils/bcrypt';
import { generateToken } from '../../../utils/jwt';

export const signup = async (parent, args, ctx, info) => {

  console.log(args)

  const password = await hashPassword(args.password);
  
  const user = await ctx.db.mutation.createUser({
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
