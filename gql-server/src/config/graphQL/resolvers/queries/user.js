import { getUserID } from '../../../utils/jwt';
import { user } from '../authPayload';

export default async (parent, { id }, ctx, info) => {
  let user; 
  
  if (id) { // if args.id is defined, then we're looking for a specific user
    user = await getUserID(ctx.request);
  } else { // else we're looking for the current user
    user = id;
  }

  return await ctx.db.query.users({ 
    where: { 
      id : user
    } 
  }, info );
};