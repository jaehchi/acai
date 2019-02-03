import { getUserID } from '../../../../utils/jwt';

export const updateChannel = async (parent, { id, type, name }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
};