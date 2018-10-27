import { getUserID } from '../../../utils/jwt';

export const joinGuild = async (parent, { guildID }, ctx, info) => {
  const userID = await getUserID(ctx.request);

  // const guild = await ctx.db.query.guilds({
  //   where: {
  //     id: guildID
  //   }
  // }, info);

  // const members = [...guild.members, { id: userID }];

  // console.log(members);
 
  const data = await ctx.db.mutation.updateGuild({
    where: {
      id: guildID
    },
    data : {
      members: {
        connect: {
          id: userID
        }
      }
    }
  }, info );

  console.log(data);

  // console.log('data: ', data);
  return data;
};