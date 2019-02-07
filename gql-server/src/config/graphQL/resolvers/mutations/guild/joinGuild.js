import { getUserID } from '../../../../utils/jwt';
import { decrypt } from '../../../../utils/crypto';

export const joinGuild = async (parent, { invite }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const inviteData = await ctx.db.query.invites({
    where: {
      code: invite
    }
  }, `{ id, code, guild { id }}`);



  const isValidInvite = inviteData[0].code === invite;

  if ( isValidInvite ) {
    return await ctx.db.mutation.updateGuild({
      where: {
        id: inviteData[0].guild.id
      },
      data: {
        members: {
          connect: {
            id: userID
          }
        }
      }
    }, info);
  }

};