import { getUserID } from '../../../utils/jwt';

export default async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  
  const data = await ctx.db.query.user({ where: { id: userID } }, info );

  for ( let i = 0; i < data.friends.length; i++ ) {
    data.friends[i].dmChannels = data.friends[i].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === userID })});
    data.friends[i].memberOf = data.memberOf.filter(guild => JSON.stringify(data.friends[i].memberOf).includes(JSON.stringify(guild)));
  }
  
  
  return data;
};