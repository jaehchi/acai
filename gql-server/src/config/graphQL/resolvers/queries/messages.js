import { getUserID } from '../../../utils/jwt';
import { each } from 'lodash';
import moment from 'moment';

export default async (parent, { id, orderBy, last }, ctx, info) => {

  return await ctx.db.query.messages({
    where: {
      channel: {
        id,
      }
    },
    orderBy,
    last,
  }, info);
};

// const converMessagesTimeStamps = async (messages) => {
//   each( messages, (message) => {
//     message.createdAt = moment(message.createdAt).format('YYYY-MM-DD h:mm:ss A');
//   });
// }