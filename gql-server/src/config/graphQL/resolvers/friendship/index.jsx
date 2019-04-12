
import { getUserID } from '../../../../utils/jwt';
import { each } from 'lodash';

const relations = (root, args, ctx, info) => {
  const userID = await getUserID(ctx.request);

  return ctx.db.query.relations({ where: { link_some: { id: userID }}}, info);
}

export default { relations };