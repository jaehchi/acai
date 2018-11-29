import { getUserID } from '../../../utils/jwt';
import { encrypt, decrypt } from '../../../utils/crypto';

export const createSlug = async ( parent, { id }, ctx, info ) => {
  const userID = await getUserID(ctx.request);

  const slug = await ctx.db.mutation.createSlug({
    data: {
      guild: {
        connect: {
          id,
        }
      }
    }
  }, `{ id }`);

  //encrypt slug
  const encrypted = await encrypt(slug.id);
  console.log(encrypted)

  return await ctx.db.mutation.updateSlug({
    where: {
      id: slug.id
    },
    data: {
      code: encrypted.slice(0, 7),
      key: encrypted.slice(7, encrypted.length)
    }
  });

};