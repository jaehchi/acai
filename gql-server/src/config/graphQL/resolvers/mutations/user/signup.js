import randomColor from 'randomcolor';
 
import { hashPassword } from '../../../../utils/bcrypt';
import { generateToken } from '../../../../utils/jwt';

export const signup = async (parent, args, ctx, info) => {

  const password = await hashPassword(args.password);

  args.avatar = args.avatar ? args.avatar : randomColor({ luminosity: 'light', hue: 'random' });
  
  const user = await ctx.db.mutation.createUser({
    data: {
      ...args,
      status: 'online',
      password
    }
  }, `{ id email username status, avatar }`);
  
  const token = await generateToken(user.id);

  return { 
    token,
    user
  };
};
