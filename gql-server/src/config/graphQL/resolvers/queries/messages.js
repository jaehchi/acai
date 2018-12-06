import { getUserID } from '../../../utils/jwt';

export default async (parent, { id }, ctx, info) => {

  return await ctx.db.query.messages({
    where: {
      channel: {
        id,
      }
    }
  }, info);

};
