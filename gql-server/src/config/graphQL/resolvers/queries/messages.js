import { getUserID } from '../../../utils/jwt';
import { each } from 'lodash';
import moment from 'moment';

export default async (parent, { id, orderBy, last }, ctx, info) => {

  const messages = await ctx.db.query.messages({
    where: {
      channel: {
        id,
      }
    },
    orderBy,
    last,
  }, info);

  await converMessagesTimeStamps(messages);
  
  return messages;

};

const converMessagesTimeStamps = async (messages) => {
  each( messages, (message) => {
    message.createdAt = moment(message.createdAt).format('YYYY-MM-DD h:mm:ss A');
  });
}

// const converMessagesTimeStamps = async (messages) => {
//   each( messages, (message) => {
//     const createdAt = moment(message.createdAt).format('MMMM Do, YYYY| h:mm A').split('| ');

//     message.createdAt = {
//       date: createdAt[0],
//       time: createdAt[1]
//     }
//   });
// }