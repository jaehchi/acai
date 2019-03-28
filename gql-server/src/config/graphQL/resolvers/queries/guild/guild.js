import { getUserID } from '../../../../utils/jwt';

export default async (parent, { id }, ctx, info) => {
  let userID = await getUserID(ctx.request);
  
  return await ctx.db.query.guild({
    where: {
      id,
    }
  }, info);

  
};
