import { getUserID } from '../../../../utils/jwt';

export default async (parent, { id, orderBy }, ctx, info) => {
  let userID = await getUserID(ctx.request);

  return await ctx.db.query.channels({
    where: {
      belongsTo: {
        id,
      },
    },
    orderBy,
  }, info);

};
