import { getUserID } from '../../../../utils/jwt';
import { each } from 'lodash';


export default async (parent, { filter }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const link =  { link_some: { id: userID }}

  const possibleRelationFilters = {
    Online: { AND: [ link, { status: 'Accepted' }, { link_every: { status: filter }} ] },
    Pending: { AND: [ link, { status: filter } ] },
    Blocked: { AND: [ link, { status: filter } ] },
    All: { AND: [ link, { status: 'Accepted' } ] }
  }

  const where = filter ? possibleRelationFilters[filter] : link;
  const relations = await ctx.db.query.relations({ where }, info);

  each( relations, ( relation ) => {
    relation.link = relation.link.filter( user => { return user.id !== userID });
  });

  return relations;
};
