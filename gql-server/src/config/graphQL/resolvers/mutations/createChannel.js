import { getUserID } from '../../../utils/jwt';

export const createChannel = async (parent, { type, name, id, position }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  name = name.toLowerCase();
  
  const { owner } =  await ctx.db.query.guild({
    where: {
      id,
    }
  }, `{ owner { id } }`);

  if ( owner.id !== userID ) {
    throw new Error('Only the Guild owner is allowed to create channels');
  }
  
  return await ctx.db.mutation.createChannel({
    data: {
      type,
      name,
      belongsTo: {
        connect: {
          id,
        }
      }
    }
  }, info);
};