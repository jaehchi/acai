import { getUserID } from '../../../utils/jwt';

export const fetchAllMembers = async (parent, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  const guild = await ctx.db.query.guild({
    data: {
      ...args,
      owner: {
        connect: {
          id: userID,
        }
      },
      members: {
        connect: {
          id: userID, 
        }
      }
    }
  }, info ); 

  return guild;
};