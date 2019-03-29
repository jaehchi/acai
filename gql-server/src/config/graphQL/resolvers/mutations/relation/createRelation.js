import { getUserID } from '../../../../utils/jwt';


const actions = { 
  0: 'Pending',
  2: 'Blocked',
}

// On create Friend relation, an user cannot accepted nor decline a person, but they are able to block a user 
// even if they are not friends
export const createRelation = async (parent, { friend_username, action }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  let isValidAction = actions[action] || false; 

  if ( isValidAction ) {
    await ctx.db.mutation.createChannel({ 
      data: {
        type: 1,
        recipients: {
          connect: [{ id: userID }, { username: friend_username }]
        }
      }
    });

    return await ctx.db.mutation.createRelation({
      data: {
        link: {
          connect: [{ id: userID }, { username: friend_username }]
        },
        status: isValidAction,
        action_id: userID
      }
    }, info)
  }
  
};

