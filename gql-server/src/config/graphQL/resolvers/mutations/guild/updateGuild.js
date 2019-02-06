import { getUserID } from '../../../../utils/jwt';

export const updateGuild = async (parent, { id, name, avatar, newOwner}, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const { owner } = await ctx.db.query.guild({ where: { id } }, `{ owner { id }}`);

  if ( owner.id !== userID ) {
    throw new Error('only guild owners can edit guilds');
  } 

  let isNewOwnerAvailable = newOwner || null;

  if ( isNewOwnerAvailable ) {
    return await ctx.db.mutation.updateGuild({
      where: { id },
      data: {
        name,
        avatar,
        owner: {
          connect: {
            id: newOwner
          }
        }
      }
    }, info);
  } else {
    return await ctx.db.mutation.updateGuild({
      where: { id },
      data: {
        name,
        avatar,
      }
    }, info);
  }
};