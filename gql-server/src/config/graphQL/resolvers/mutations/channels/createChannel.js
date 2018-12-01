import { getUserID } from '../../../../utils/jwt';

export const createChannel = async (parent, { id, type, name }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  const { owner } =  await ctx.db.query.guild({
    where: {
      id,
    }
  }, `{ owner { id } }`);

  // will have roles later on for validating correct user to create channels

  if ( owner.id !== userID ) {
    throw new Error('Only the owner is allowed to create channels');
  }

  // Get all channels that we'll need to increase their position
	const channelsPositionsToIncrement = await ctx.db.query.channels({
		orderBy: 'position_ASC',
		where: {
      belongsTo: {
        id,
      }
		}
  }, `{ id type name position }`);

  const channelsPositionToIncrementMutations = [];
  
	for (const channel of channelsPositionsToIncrement) {
		channelsPositionToIncrementMutations.push(
			ctx.db.mutation.updateChannel({
        where: { 
          id: channel.id 
        },
        data: { 
          position: channel.position + 1 
        }
      })
    );
  }

  // Update all sections in parallel
  await Promise.all(channelsPositionToMoveMutations);

  // create new channel in current position
  return await ctx.db.mutation.createChannel({
    data: { 
      type,
      name,
      position: 0,
      belongsTo: {
        connect: { id, }
      },
    },
  }, info);
};
