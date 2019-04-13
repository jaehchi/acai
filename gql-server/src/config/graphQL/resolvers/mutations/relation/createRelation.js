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

  const doesRelationAlreadyExist = await ctx.db.query.relations({
    where: {
      AND: [
        {
          link_some:{
            id: userID
          }
        },
        {
          link_some: {
            username: friend_username
          }
        }
      ]
    }
  }, info);

  console.log(doesRelationAlreadyExist)

  if (!isValidAction) {
    throw new Error('Please select a new action');
  }

  if ( doesRelationAlreadyExist.length !== 0 ) {
    const existingRel = doesRelationAlreadyExist[0];
    if ( existingRel.status === 'Pending' ) {
      throw new Error (`there's already a pending request`);
    } else if ( existingRel.status === 'Accepted' ) {
      throw new Error (`Already friends, bro`);
    } else if ( existingRel.status === 'Declined' ) {
      return await ctx.db.mutation.updateRelation({
        where: { id: existingRel.id },
        data: {
          status: 'Pending'
        }
      }, info)
    }
  }

  if ( isValidAction && doesRelationAlreadyExist.length === 0 ) {
    await ctx.db.mutation.createChannel({ 
      data: {
        type: 1,
        recipients: {
          connect: [{ id: userID }, { username: friend_username }]
        }
      }
    });

    const relation =  await ctx.db.mutation.createRelation({
      data: {
        link: {
          connect: [{ id: userID }, { username: friend_username }]
        },
        status: isValidAction,
        action_id: userID
      }
    }, info);

    relation.link = relation.link.filter( user => { return user.id !== userID }); 
    relation.link[0].dmChannels = [relation.link[0].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === userID })})];
    relation.link[0].memberOf = relation.link[0].memberOf.filter(guild => JSON.stringify(relation.link[0].memberOf).includes(JSON.stringify(guild)));

    return relation;
  }
  
};

