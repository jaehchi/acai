import { getUserID } from '../../../../utils/jwt';
import { shortUrl } from '../../../../utils/short';


export const createInvite = async ( parent, { id }, ctx, info ) => {
  const userID = await getUserID(ctx.request);
  let code = await shortUrl();

  // non-scalable
  const checkForUsedCodes = await ctx.db.query.invites({
    where: {
      code_contains: code,
    }
  }, `{ id createdAt code } `);


  if ( !checkForUsedCodes.length ) {
    return await ctx.db.mutation.createInvite({
      data: {
        code,
        guild: {
          connect: {
            id,
          }
        }
      }
    }, `{ id code }`);
  }

};