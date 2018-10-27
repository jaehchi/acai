import { getUserID } from '../../../utils/jwt';

export const createMessage = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  
};