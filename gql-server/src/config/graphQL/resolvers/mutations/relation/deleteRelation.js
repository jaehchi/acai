import { getUserID } from '../../../../utils/jwt';

export const deleteRelation = async (parent, { id }, ctx, info) => {
  const userID = await getUserID(ctx.request);
  const where = { id };
  const { link } = await ctx.db.query.relation({ where }, `{ id link { id username }}`);

  const userInLink = link.filter( user => ( user.id === userID ));
  if ( userInLink.length > 0 ) {
    return ctx.db.mutation.deleteRelation({ where }, info);
  }
};