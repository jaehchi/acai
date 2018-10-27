import { hashPassword } from '../../../utils/bcrypt';
import { generateToken } from '../../../utils/jwt';

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
