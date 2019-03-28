import { getUserID } from '../../../../utils/jwt';

export default async (parent, { id }, ctx, info) => {

  return await ctx.db.query.channel({
    where: {
      id,
    }
  }, info);

};
