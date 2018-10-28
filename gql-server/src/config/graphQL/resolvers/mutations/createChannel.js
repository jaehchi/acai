import { getUserID } from '../../../utils/jwt';

export const createChannel = async (parent, { type, channelname, id }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const { owner } =  await ctx.db.query.guild({
    where: {
      id,
    }
  }, `{ owner { id } }`);

  if ( owner.id !== userID ) {
    throw new Error('Only the Guild Owners are allowed to create channels');
  }
  
  return await ctx.db.mutation.createChannel({
    data: {
      type,
      channelname,
      belongsTo: {
        connect: {
          id,
        }
      }
    }
  }, info);
};