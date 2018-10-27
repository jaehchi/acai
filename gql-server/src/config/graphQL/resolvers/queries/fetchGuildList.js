import { getUserID } from '../../../utils/jwt';

export default async (parent, args, ctx, info) => {
  // console.log('args', args);
  // let userID = await getUserID(ctx.request);
  

  // const data =  await ctx.db.query.memberses({
  //   where: {
  //     users: {
  //       id: userID
  //     }
  //   }
  // }, `{ guilds { id guildname } }`)
  

  // console.log('data : ,', data[0].guilds.guildname);
};
