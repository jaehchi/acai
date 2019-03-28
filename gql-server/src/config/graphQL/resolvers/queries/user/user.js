import { getUserID } from '../../../../utils/jwt';

export default async (parent, { id }, ctx, info) => {
  let user; 
  
  if (id) { // if args.id is defined, then we're looking for a specific user
    user = id;
  } else { // else we're looking for the current user
    user = await getUserID(ctx.request);
  }

  return await ctx.db.query.user({ 
    where: { 
      id : user
    } 
  }, info );
};