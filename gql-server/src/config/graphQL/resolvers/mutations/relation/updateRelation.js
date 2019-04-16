import { getUserID } from '../../../../utils/jwt';


const actions = { 
  0: 'Pending',
  1: 'Accepted', 
  2: 'Blocked',
  3: 'Declined',
}

// everytime an user update friends relation, the re

export const updateRelation = async (parent, { id, action }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  let isValidAction = actions[action] || false; 

  if ( isValidAction ) {
    const relation = await ctx.db.mutation.updateRelation({
      where: {
        id, 
      },
      data: {
        status: isValidAction,
        action_id: userID
      }
    }, info);

    return relation;
  };
};

