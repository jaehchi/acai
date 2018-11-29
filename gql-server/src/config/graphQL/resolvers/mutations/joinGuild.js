import { getUserID } from '../../../utils/jwt';
import { decrypt } from '../../../utils/crypto';

export const joinGuild = async (parent, { slug }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const slugData = await ctx.db.query.slugs({
    where: {
      code: slug
    }
  }, `{ id, code, key guild { id }}`);

  console.log(slugData)

  const dec = await decrypt(slugData[0].code + slugData[0].key);
  console.log(dec);

  if ( dec === slugData[0].id ) {
    return await ctx.db.mutation.updateGuild({
      where: {
        id: slugData[0].guild.id
      },
      data: {
        members: {
          connect: {
            id: userID
          }
        }
      }
    }, info);
  };
};