import { getUserID } from '../../../utils/jwt';
import { each } from 'lodash';
import moment from 'moment';

export default async (parent, { id, last, before,  } , ctx, info) => {
  const where = {
    channel: {
      id,
    }
  };
  
  return await ctx.db.query.messagesConnection({
    where,
    last,
    before,
  }, info);
};