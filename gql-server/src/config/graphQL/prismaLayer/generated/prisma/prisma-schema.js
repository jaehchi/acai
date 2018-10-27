module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChannel {
  count: Int!
}

type AggregateGuild {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Channel {
  id: ID!
  type: Int!
  channelname: String!
  belongsTo: Guild
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type ChannelConnection {
  pageInfo: PageInfo!
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  type: Int!
  channelname: String!
  belongsTo: GuildCreateOneWithoutChannelsInput
  messages: MessageCreateManyWithoutChannelInput
}

input ChannelCreateManyWithoutBelongsToInput {
  create: [ChannelCreateWithoutBelongsToInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateOneWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutBelongsToInput {
  type: Int!
  channelname: String!
  messages: MessageCreateManyWithoutChannelInput
}

input ChannelCreateWithoutMessagesInput {
  type: Int!
  channelname: String!
  belongsTo: GuildCreateOneWithoutChannelsInput
}

type ChannelEdge {
  node: Channel!
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  channelname_ASC
  channelname_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  type: Int!
  channelname: String!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
  AND: [ChannelSubscriptionWhereInput!]
  OR: [ChannelSubscriptionWhereInput!]
  NOT: [ChannelSubscriptionWhereInput!]
}

input ChannelUpdateInput {
  type: Int
  channelname: String
  belongsTo: GuildUpdateOneWithoutChannelsInput
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelUpdateManyWithoutBelongsToInput {
  create: [ChannelCreateWithoutBelongsToInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutBelongsToInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutBelongsToInput!]
}

input ChannelUpdateOneWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  update: ChannelUpdateWithoutMessagesDataInput
  upsert: ChannelUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: ChannelWhereUniqueInput
}

input ChannelUpdateWithoutBelongsToDataInput {
  type: Int
  channelname: String
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelUpdateWithoutMessagesDataInput {
  type: Int
  channelname: String
  belongsTo: GuildUpdateOneWithoutChannelsInput
}

input ChannelUpdateWithWhereUniqueWithoutBelongsToInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutBelongsToDataInput!
}

input ChannelUpsertWithoutMessagesInput {
  update: ChannelUpdateWithoutMessagesDataInput!
  create: ChannelCreateWithoutMessagesInput!
}

input ChannelUpsertWithWhereUniqueWithoutBelongsToInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutBelongsToDataInput!
  create: ChannelCreateWithoutBelongsToInput!
}

input ChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  channelname: String
  channelname_not: String
  channelname_in: [String!]
  channelname_not_in: [String!]
  channelname_lt: String
  channelname_lte: String
  channelname_gt: String
  channelname_gte: String
  channelname_contains: String
  channelname_not_contains: String
  channelname_starts_with: String
  channelname_not_starts_with: String
  channelname_ends_with: String
  channelname_not_ends_with: String
  belongsTo: GuildWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [ChannelWhereInput!]
  OR: [ChannelWhereInput!]
  NOT: [ChannelWhereInput!]
}

input ChannelWhereUniqueInput {
  id: ID
}

type Guild {
  id: ID!
  guildname: String!
  owner: User
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type GuildConnection {
  pageInfo: PageInfo!
  edges: [GuildEdge]!
  aggregate: AggregateGuild!
}

input GuildCreateInput {
  guildname: String!
  owner: UserCreateOneWithoutOwnerOfInput
  channels: ChannelCreateManyWithoutBelongsToInput
  members: UserCreateManyWithoutMemberOfInput
}

input GuildCreateManyWithoutMembersInput {
  create: [GuildCreateWithoutMembersInput!]
  connect: [GuildWhereUniqueInput!]
}

input GuildCreateManyWithoutOwnerInput {
  create: [GuildCreateWithoutOwnerInput!]
  connect: [GuildWhereUniqueInput!]
}

input GuildCreateOneWithoutChannelsInput {
  create: GuildCreateWithoutChannelsInput
  connect: GuildWhereUniqueInput
}

input GuildCreateWithoutChannelsInput {
  guildname: String!
  owner: UserCreateOneWithoutOwnerOfInput
  members: UserCreateManyWithoutMemberOfInput
}

input GuildCreateWithoutMembersInput {
  guildname: String!
  owner: UserCreateOneWithoutOwnerOfInput
  channels: ChannelCreateManyWithoutBelongsToInput
}

input GuildCreateWithoutOwnerInput {
  guildname: String!
  channels: ChannelCreateManyWithoutBelongsToInput
  members: UserCreateManyWithoutMemberOfInput
}

type GuildEdge {
  node: Guild!
  cursor: String!
}

enum GuildOrderByInput {
  id_ASC
  id_DESC
  guildname_ASC
  guildname_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildPreviousValues {
  id: ID!
  guildname: String!
}

type GuildSubscriptionPayload {
  mutation: MutationType!
  node: Guild
  updatedFields: [String!]
  previousValues: GuildPreviousValues
}

input GuildSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildWhereInput
  AND: [GuildSubscriptionWhereInput!]
  OR: [GuildSubscriptionWhereInput!]
  NOT: [GuildSubscriptionWhereInput!]
}

input GuildUpdateInput {
  guildname: String
  owner: UserUpdateOneWithoutOwnerOfInput
  channels: ChannelUpdateManyWithoutBelongsToInput
  members: UserUpdateManyWithoutMemberOfInput
}

input GuildUpdateManyWithoutMembersInput {
  create: [GuildCreateWithoutMembersInput!]
  delete: [GuildWhereUniqueInput!]
  connect: [GuildWhereUniqueInput!]
  disconnect: [GuildWhereUniqueInput!]
  update: [GuildUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [GuildUpsertWithWhereUniqueWithoutMembersInput!]
}

input GuildUpdateManyWithoutOwnerInput {
  create: [GuildCreateWithoutOwnerInput!]
  delete: [GuildWhereUniqueInput!]
  connect: [GuildWhereUniqueInput!]
  disconnect: [GuildWhereUniqueInput!]
  update: [GuildUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GuildUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GuildUpdateOneWithoutChannelsInput {
  create: GuildCreateWithoutChannelsInput
  update: GuildUpdateWithoutChannelsDataInput
  upsert: GuildUpsertWithoutChannelsInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildWhereUniqueInput
}

input GuildUpdateWithoutChannelsDataInput {
  guildname: String
  owner: UserUpdateOneWithoutOwnerOfInput
  members: UserUpdateManyWithoutMemberOfInput
}

input GuildUpdateWithoutMembersDataInput {
  guildname: String
  owner: UserUpdateOneWithoutOwnerOfInput
  channels: ChannelUpdateManyWithoutBelongsToInput
}

input GuildUpdateWithoutOwnerDataInput {
  guildname: String
  channels: ChannelUpdateManyWithoutBelongsToInput
  members: UserUpdateManyWithoutMemberOfInput
}

input GuildUpdateWithWhereUniqueWithoutMembersInput {
  where: GuildWhereUniqueInput!
  data: GuildUpdateWithoutMembersDataInput!
}

input GuildUpdateWithWhereUniqueWithoutOwnerInput {
  where: GuildWhereUniqueInput!
  data: GuildUpdateWithoutOwnerDataInput!
}

input GuildUpsertWithoutChannelsInput {
  update: GuildUpdateWithoutChannelsDataInput!
  create: GuildCreateWithoutChannelsInput!
}

input GuildUpsertWithWhereUniqueWithoutMembersInput {
  where: GuildWhereUniqueInput!
  update: GuildUpdateWithoutMembersDataInput!
  create: GuildCreateWithoutMembersInput!
}

input GuildUpsertWithWhereUniqueWithoutOwnerInput {
  where: GuildWhereUniqueInput!
  update: GuildUpdateWithoutOwnerDataInput!
  create: GuildCreateWithoutOwnerInput!
}

input GuildWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  guildname: String
  guildname_not: String
  guildname_in: [String!]
  guildname_not_in: [String!]
  guildname_lt: String
  guildname_lte: String
  guildname_gt: String
  guildname_gte: String
  guildname_contains: String
  guildname_not_contains: String
  guildname_starts_with: String
  guildname_not_starts_with: String
  guildname_ends_with: String
  guildname_not_ends_with: String
  owner: UserWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  AND: [GuildWhereInput!]
  OR: [GuildWhereInput!]
  NOT: [GuildWhereInput!]
}

input GuildWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  content: String!
  author: User
  channel: Channel
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  content: String!
  author: UserCreateOneWithoutMessagesInput
  channel: ChannelCreateOneWithoutMessagesInput
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  content: String!
  channel: ChannelCreateOneWithoutMessagesInput
}

input MessageCreateWithoutChannelInput {
  content: String!
  author: UserCreateOneWithoutMessagesInput
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  content: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  content: String
  author: UserUpdateOneWithoutMessagesInput
  channel: ChannelUpdateOneWithoutMessagesInput
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
}

input MessageUpdateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessageUpdateWithoutAuthorDataInput {
  content: String
  channel: ChannelUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutChannelDataInput {
  content: String
  author: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChannelDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChannelDataInput!
  create: MessageCreateWithoutChannelInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  channel: ChannelWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChannel(data: ChannelCreateInput!): Channel!
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateManyChannels(data: ChannelUpdateInput!, where: ChannelWhereInput): BatchPayload!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  createGuild(data: GuildCreateInput!): Guild!
  updateGuild(data: GuildUpdateInput!, where: GuildWhereUniqueInput!): Guild
  updateManyGuilds(data: GuildUpdateInput!, where: GuildWhereInput): BatchPayload!
  upsertGuild(where: GuildWhereUniqueInput!, create: GuildCreateInput!, update: GuildUpdateInput!): Guild!
  deleteGuild(where: GuildWhereUniqueInput!): Guild
  deleteManyGuilds(where: GuildWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  channel(where: ChannelWhereUniqueInput!): Channel
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  guild(where: GuildWhereUniqueInput!): Guild
  guilds(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild]!
  guildsConnection(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  guild(where: GuildSubscriptionWhereInput): GuildSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  username: String!
  password: String!
  ownerOf(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild!]
  memberOf(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildCreateManyWithoutOwnerInput
  memberOf: GuildCreateManyWithoutMembersInput
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateManyWithoutMemberOfInput {
  create: [UserCreateWithoutMemberOfInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnerOfInput {
  create: UserCreateWithoutOwnerOfInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMemberOfInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildCreateManyWithoutOwnerInput
  messages: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutMessagesInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildCreateManyWithoutOwnerInput
  memberOf: GuildCreateManyWithoutMembersInput
}

input UserCreateWithoutOwnerOfInput {
  email: String!
  username: String!
  password: String!
  memberOf: GuildCreateManyWithoutMembersInput
  messages: MessageCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  ownerOf: GuildUpdateManyWithoutOwnerInput
  memberOf: GuildUpdateManyWithoutMembersInput
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateManyWithoutMemberOfInput {
  create: [UserCreateWithoutMemberOfInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMemberOfInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMemberOfInput!]
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnerOfInput {
  create: UserCreateWithoutOwnerOfInput
  update: UserUpdateWithoutOwnerOfDataInput
  upsert: UserUpsertWithoutOwnerOfInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMemberOfDataInput {
  email: String
  username: String
  password: String
  ownerOf: GuildUpdateManyWithoutOwnerInput
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutMessagesDataInput {
  email: String
  username: String
  password: String
  ownerOf: GuildUpdateManyWithoutOwnerInput
  memberOf: GuildUpdateManyWithoutMembersInput
}

input UserUpdateWithoutOwnerOfDataInput {
  email: String
  username: String
  password: String
  memberOf: GuildUpdateManyWithoutMembersInput
  messages: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutMemberOfDataInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutOwnerOfInput {
  update: UserUpdateWithoutOwnerOfDataInput!
  create: UserCreateWithoutOwnerOfInput!
}

input UserUpsertWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutMemberOfDataInput!
  create: UserCreateWithoutMemberOfInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  ownerOf_every: GuildWhereInput
  ownerOf_some: GuildWhereInput
  ownerOf_none: GuildWhereInput
  memberOf_every: GuildWhereInput
  memberOf_some: GuildWhereInput
  memberOf_none: GuildWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    