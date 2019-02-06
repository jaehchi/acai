import { getUserID } from '../../../../utils/jwt';

export const leaveGuild = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const { owner } = await ctx.db.query.guild({ where: { id } }, `{ owner { id }}`);


  if ( owner.id === userID ) {
    throw new Error('Owner cannot leave their own guild');
  }
  
  return ctx.db.mutation.updateGuild({
    where: {
      id
    },
    data: {
      members: {
        disconnect: {
          id: userID
        }
      }
    }
  }, info);
};