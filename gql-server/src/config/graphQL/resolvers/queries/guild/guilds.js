import { getUserID } from '../../../../utils/jwt';

export default async (parent, args, ctx, info) => {
  let userID = await getUserID(ctx.request);
  
  return await ctx.db.query.guilds({
    where: {
      members_some: {
        id: userID
      }
    }
  }, info);

  
};
