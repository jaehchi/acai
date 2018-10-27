import { getUserID } from '../../../utils/jwt';

export const createChannel = async (parent, { guildID, channelname, type }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  const { owner } = await ctx.db.query.guilds({
    where: {
      id: guildID
    }
  }, `{ owner { id } }`);

  if ( userID !== owner.id ) {
    throw new Error('Only the guild owner can create channels');
  }

  return await ctx.db.mutation.createChannels({
    data: {
      type,
      channelname,
      belongsTo: {
        connect: {
          id: guildID
        }
      }
    }
  }, info);
};