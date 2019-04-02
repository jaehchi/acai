import { getUserID } from '../../../../utils/jwt';
import { each } from 'lodash';


export default async (parent, { filter }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const defaultFilter =  { link_some: { id: userID }}

  const possibleRelationFilters = {
    Online: { AND: [ defaultFilter, { status: 'Accepted' }, { link_every: { status: filter }} ] },
    Pending: { AND: [ defaultFilter, { status: filter } ] },
    Blocked: { AND: [ defaultFilter, { status: filter } ] },
    All: { AND: [ defaultFilter, { status: 'Accepted' } ] },
    None: { AND: [ defaultFilter, {OR: [ { status: 'Accepted' }, { status: 'Pending' } ]} ] }
  }

  const where = filter ? possibleRelationFilters[filter] : possibleRelationFilters['None'];
  const relations = await ctx.db.query.relations({ where }, info);

  each( relations, ( relation ) => {
    relation.link = relation.link.filter( user => { return user.id !== userID }); 
    relation.link[0].dmChannels = [relation.link[0].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === userID })})];
    relation.link[0].memberOf = relation.link[0].memberOf.filter(guild => JSON.stringify(relation.link[0].memberOf).includes(JSON.stringify(guild)));
  });

  return relations;
};
