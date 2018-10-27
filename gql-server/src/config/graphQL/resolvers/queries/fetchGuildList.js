import { getUserID } from '../../../utils/jwt';

export default async (parent, args, ctx, info) => {
  let user = await getUserID(ctx.request);

 

 
};
