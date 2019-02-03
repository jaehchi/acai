import { getUserID } from '../../../../utils/jwt';
import { each } from 'lodash';

export const updatePos = async ( arr, from, to ) => {
  const list = arr.slice();

  if ( to === from ) {
    return list;
  }

  const target = list[from];
  const increment = to < from ? -1 : 1;
  

  for ( let i = from; i != to; i += increment) {
    list[i] = list[ i + increment ];
  }
  
  list[to] = target;
  return list;
}

export const updateChannelPosition = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  const { owner } =  await ctx.db.query.guild({
    where: {
      id: args.id
    }
  }, `{ owner { id } }`);

  // will have roles later on for validating correct user to create channels

  if ( owner.id !== userID ) {
    throw new Error('Only the owner is allowed to create channels');
  }


  // Get all channels that we'll need to reorder their position
	const channelsPositionsToReorder = await ctx.db.query.channels({
		orderBy: 'position_ASC',
		where: {
      belongsTo: {
        id: args.id
      }
		}
  }, `{ id type name position }`);

  const channelsAreReordered = await updatePos( channelsPositionsToReorder, args.from, args.to );

  const channelsPositionToReorderMutations = [];

  each( channelsAreReordered, (channel, index) => {
    channelsPositionToReorderMutations.push(
			ctx.db.mutation.updateChannel({
        where: { 
          id: channel.id 
        },
        data: { 
          position: index
        }
      })
    );
  })
  
  // Update all sections in parallel
  await Promise.all(channelsPositionToReorderMutations);

  return await ctx.db.query.channels({
    orderBy: 'position_ASC',
    where: {
      belongsTo: {
        id: args.id
      }
    },
  }, info);
};


