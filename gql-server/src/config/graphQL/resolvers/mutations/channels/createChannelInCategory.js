import { getUserID } from '../../../../utils/jwt';

export const createChannelInCategory = async (parent, { id, type, name }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  // const { owner } =  await ctx.db.query.guild({
  //   where: {
  //     id,
  //   }
  // }, `{ owner { id } }`);

  // if ( owner.id !== userID ) {
  //   throw new Error('Only the owner is allowed to create channels');
  // }

   // Get all channels that we'll need to increase their position
	const channelsPositionsToIncrement = await ctx.db.query.channel({
		orderBy: 'position_ASC',
		where: {
      id,
    }
  }, `{ id type name position children { id type name position } }`);

  console.log( channelsPositionsToIncrement.children)
  const channelsPositionToIncrementMutations = [];
  
	for (const channel of channelsPositionsToIncrement.children) {
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
  await Promise.all(channelsPositionToIncrementMutations);

  // create new channel in current position

  return ctx.db.mutation.createChannel({
    data: {
      type,
      name,
      position: 0,
      parent_id: {
        connect: {
          id,
        }
      }
    }
  })
};