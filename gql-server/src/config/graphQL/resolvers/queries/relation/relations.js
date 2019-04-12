import { getUserID } from '../../../../utils/jwt';
import { each } from 'lodash';


export default async (parent, { filter }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const defaultFilter =  { link_some: { id: userID }};

  const possibleRelationFilters = {
    Online: { AND: [ defaultFilter, { status: 'Accepted' }, { link_every: { status: 'Online' }} ] },
    Pending: { AND: [ defaultFilter, { status: 'Pending' } ] },
    Blocked: { AND: [ defaultFilter, { status: 'Blocked' } ] },
    All: { AND: [ defaultFilter, { status: 'Accepted' } ] },
    None: { AND: [ defaultFilter, { OR: [ { status: 'Accepted' }, { status: 'Pending' } ]} ] }
  }


  const where = filter ? possibleRelationFilters[filter] : possibleRelationFilters['None'];
  const relations = await ctx.db.query.relations({ where }, `
    { 
      id
      status
      action_id
      
      link {
        id
        username
        status
        avatar
        
        memberOf {
          id
          name
          avatar

          channels {
            id
            children {
              id
            }
          }
        }
        
        dmChannels {
          id
          recipients {
            id
            username
          }
        }
      }
    }
  `)
  

  each( relations, ( relation ) => {
    relation.link = relation.link.filter( user => { return user.id !== userID }); 
    relation.link[0].dmChannels = [relation.link[0].dmChannels.find( channel => { return channel.recipients.find( recipient => { return recipient.id === userID })})];
    relation.link[0].memberOf = relation.link[0].memberOf.filter(guild => JSON.stringify(relation.link[0].memberOf).includes(JSON.stringify(guild)));
  });
  


  const w = possibleRelationFilters['Pending']
  const count = await ctx.db.query.relations({ where: w  }, `{ id, status }`);
  console.log('count', count);

  return {
    relations,
    count: count.length
  }
};