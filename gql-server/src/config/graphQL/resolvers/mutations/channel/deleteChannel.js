import { getUserID } from '../../../../utils/jwt';

export const deleteChannel = async (parent, { id, type, name }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  

};