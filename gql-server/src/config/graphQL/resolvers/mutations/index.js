import { signup } from './user/signup';
import { login } from './user/login';
import { logout } from './user/logout';
import { deleteUser } from './user/deleteUser';
import { addFriend } from './user/addFriend';

import { createGuild } from './guild/createGuild';
import { joinGuild } from './guild/joinGuild';
import { leaveGuild } from './guild/leaveGuild';
import { updateGuild } from './guild/updateGuild';
import { deleteGuild } from './guild/deleteGuild';

import { updateChannelPosition } from './channel/updateChannelPosition';
import { createChannel } from './channel/createChannel';
import { updateChannel } from './channel/updateChannel';
import { deleteChannel } from './channel/deleteChannel';

import { createMessage } from './message/createMessage';
import { updateMessage } from './message/updateMessage';
import { deleteMessage } from './message/deleteMessage';

import { createInvite } from './invite/createInvite';


export default {
  signup,
  login,
  logout,
  deleteUser,
  addFriend,

  createGuild,
  joinGuild,
  leaveGuild,
  updateGuild,
  deleteGuild,
  
  createChannel,
  updateChannelPosition,
  updateChannel,
  deleteChannel,

  createMessage,
  updateMessage,
  deleteMessage,

  createInvite,
};