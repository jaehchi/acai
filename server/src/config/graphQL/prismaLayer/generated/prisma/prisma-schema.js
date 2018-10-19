module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChannels {
  count: Int!
}

type AggregateGuilds {
  count: Int!
}

type AggregateMembers {
  count: Int!
}

type AggregateMessages {
  count: Int!
}

type AggregateUsers {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Channels {
  id: ID!
  type: Int!
  channelname: String!
  belongsTo: Guilds
  messages(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Messages!]
}

type ChannelsConnection {
  pageInfo: PageInfo!
  edges: [ChannelsEdge]!
  aggregate: AggregateChannels!
}

input ChannelsCreateInput {
  type: Int!
  channelname: String!
  belongsTo: GuildsCreateOneWithoutChannelsInput
  messages: MessagesCreateManyWithoutChannelInput
}

input ChannelsCreateManyWithoutBelongsToInput {
  create: [ChannelsCreateWithoutBelongsToInput!]
  connect: [ChannelsWhereUniqueInput!]
}

input ChannelsCreateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  connect: ChannelsWhereUniqueInput
}

input ChannelsCreateWithoutBelongsToInput {
  type: Int!
  channelname: String!
  messages: MessagesCreateManyWithoutChannelInput
}

input ChannelsCreateWithoutMessagesInput {
  type: Int!
  channelname: String!
  belongsTo: GuildsCreateOneWithoutChannelsInput
}

type ChannelsEdge {
  node: Channels!
  cursor: String!
}

enum ChannelsOrderByInput {
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

type ChannelsPreviousValues {
  id: ID!
  type: Int!
  channelname: String!
}

type ChannelsSubscriptionPayload {
  mutation: MutationType!
  node: Channels
  updatedFields: [String!]
  previousValues: ChannelsPreviousValues
}

input ChannelsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelsWhereInput
  AND: [ChannelsSubscriptionWhereInput!]
  OR: [ChannelsSubscriptionWhereInput!]
  NOT: [ChannelsSubscriptionWhereInput!]
}

input ChannelsUpdateInput {
  type: Int
  channelname: String
  belongsTo: GuildsUpdateOneWithoutChannelsInput
  messages: MessagesUpdateManyWithoutChannelInput
}

input ChannelsUpdateManyWithoutBelongsToInput {
  create: [ChannelsCreateWithoutBelongsToInput!]
  delete: [ChannelsWhereUniqueInput!]
  connect: [ChannelsWhereUniqueInput!]
  disconnect: [ChannelsWhereUniqueInput!]
  update: [ChannelsUpdateWithWhereUniqueWithoutBelongsToInput!]
  upsert: [ChannelsUpsertWithWhereUniqueWithoutBelongsToInput!]
}

input ChannelsUpdateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  update: ChannelsUpdateWithoutMessagesDataInput
  upsert: ChannelsUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: ChannelsWhereUniqueInput
}

input ChannelsUpdateWithoutBelongsToDataInput {
  type: Int
  channelname: String
  messages: MessagesUpdateManyWithoutChannelInput
}

input ChannelsUpdateWithoutMessagesDataInput {
  type: Int
  channelname: String
  belongsTo: GuildsUpdateOneWithoutChannelsInput
}

input ChannelsUpdateWithWhereUniqueWithoutBelongsToInput {
  where: ChannelsWhereUniqueInput!
  data: ChannelsUpdateWithoutBelongsToDataInput!
}

input ChannelsUpsertWithoutMessagesInput {
  update: ChannelsUpdateWithoutMessagesDataInput!
  create: ChannelsCreateWithoutMessagesInput!
}

input ChannelsUpsertWithWhereUniqueWithoutBelongsToInput {
  where: ChannelsWhereUniqueInput!
  update: ChannelsUpdateWithoutBelongsToDataInput!
  create: ChannelsCreateWithoutBelongsToInput!
}

input ChannelsWhereInput {
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
  belongsTo: GuildsWhereInput
  messages_every: MessagesWhereInput
  messages_some: MessagesWhereInput
  messages_none: MessagesWhereInput
  AND: [ChannelsWhereInput!]
  OR: [ChannelsWhereInput!]
  NOT: [ChannelsWhereInput!]
}

input ChannelsWhereUniqueInput {
  id: ID
}

scalar DateTime

type Guilds {
  id: ID!
  guildname: String!
  owner: Users
  channels(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels!]
  members(where: MembersWhereInput, orderBy: MembersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Members!]
}

type GuildsConnection {
  pageInfo: PageInfo!
  edges: [GuildsEdge]!
  aggregate: AggregateGuilds!
}

input GuildsCreateInput {
  guildname: String!
  owner: UsersCreateOneWithoutOwnerOfInput
  channels: ChannelsCreateManyWithoutBelongsToInput
  members: MembersCreateManyWithoutGuildsInput
}

input GuildsCreateManyWithoutOwnerInput {
  create: [GuildsCreateWithoutOwnerInput!]
  connect: [GuildsWhereUniqueInput!]
}

input GuildsCreateOneWithoutChannelsInput {
  create: GuildsCreateWithoutChannelsInput
  connect: GuildsWhereUniqueInput
}

input GuildsCreateOneWithoutMembersInput {
  create: GuildsCreateWithoutMembersInput
  connect: GuildsWhereUniqueInput
}

input GuildsCreateWithoutChannelsInput {
  guildname: String!
  owner: UsersCreateOneWithoutOwnerOfInput
  members: MembersCreateManyWithoutGuildsInput
}

input GuildsCreateWithoutMembersInput {
  guildname: String!
  owner: UsersCreateOneWithoutOwnerOfInput
  channels: ChannelsCreateManyWithoutBelongsToInput
}

input GuildsCreateWithoutOwnerInput {
  guildname: String!
  channels: ChannelsCreateManyWithoutBelongsToInput
  members: MembersCreateManyWithoutGuildsInput
}

type GuildsEdge {
  node: Guilds!
  cursor: String!
}

enum GuildsOrderByInput {
  id_ASC
  id_DESC
  guildname_ASC
  guildname_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildsPreviousValues {
  id: ID!
  guildname: String!
}

type GuildsSubscriptionPayload {
  mutation: MutationType!
  node: Guilds
  updatedFields: [String!]
  previousValues: GuildsPreviousValues
}

input GuildsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildsWhereInput
  AND: [GuildsSubscriptionWhereInput!]
  OR: [GuildsSubscriptionWhereInput!]
  NOT: [GuildsSubscriptionWhereInput!]
}

input GuildsUpdateInput {
  guildname: String
  owner: UsersUpdateOneWithoutOwnerOfInput
  channels: ChannelsUpdateManyWithoutBelongsToInput
  members: MembersUpdateManyWithoutGuildsInput
}

input GuildsUpdateManyWithoutOwnerInput {
  create: [GuildsCreateWithoutOwnerInput!]
  delete: [GuildsWhereUniqueInput!]
  connect: [GuildsWhereUniqueInput!]
  disconnect: [GuildsWhereUniqueInput!]
  update: [GuildsUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GuildsUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GuildsUpdateOneWithoutChannelsInput {
  create: GuildsCreateWithoutChannelsInput
  update: GuildsUpdateWithoutChannelsDataInput
  upsert: GuildsUpsertWithoutChannelsInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildsWhereUniqueInput
}

input GuildsUpdateOneWithoutMembersInput {
  create: GuildsCreateWithoutMembersInput
  update: GuildsUpdateWithoutMembersDataInput
  upsert: GuildsUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildsWhereUniqueInput
}

input GuildsUpdateWithoutChannelsDataInput {
  guildname: String
  owner: UsersUpdateOneWithoutOwnerOfInput
  members: MembersUpdateManyWithoutGuildsInput
}

input GuildsUpdateWithoutMembersDataInput {
  guildname: String
  owner: UsersUpdateOneWithoutOwnerOfInput
  channels: ChannelsUpdateManyWithoutBelongsToInput
}

input GuildsUpdateWithoutOwnerDataInput {
  guildname: String
  channels: ChannelsUpdateManyWithoutBelongsToInput
  members: MembersUpdateManyWithoutGuildsInput
}

input GuildsUpdateWithWhereUniqueWithoutOwnerInput {
  where: GuildsWhereUniqueInput!
  data: GuildsUpdateWithoutOwnerDataInput!
}

input GuildsUpsertWithoutChannelsInput {
  update: GuildsUpdateWithoutChannelsDataInput!
  create: GuildsCreateWithoutChannelsInput!
}

input GuildsUpsertWithoutMembersInput {
  update: GuildsUpdateWithoutMembersDataInput!
  create: GuildsCreateWithoutMembersInput!
}

input GuildsUpsertWithWhereUniqueWithoutOwnerInput {
  where: GuildsWhereUniqueInput!
  update: GuildsUpdateWithoutOwnerDataInput!
  create: GuildsCreateWithoutOwnerInput!
}

input GuildsWhereInput {
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
  owner: UsersWhereInput
  channels_every: ChannelsWhereInput
  channels_some: ChannelsWhereInput
  channels_none: ChannelsWhereInput
  members_every: MembersWhereInput
  members_some: MembersWhereInput
  members_none: MembersWhereInput
  AND: [GuildsWhereInput!]
  OR: [GuildsWhereInput!]
  NOT: [GuildsWhereInput!]
}

input GuildsWhereUniqueInput {
  id: ID
}

scalar Long

type Members {
  id: ID!
  guilds: Guilds
  users: Users
}

type MembersConnection {
  pageInfo: PageInfo!
  edges: [MembersEdge]!
  aggregate: AggregateMembers!
}

input MembersCreateInput {
  guilds: GuildsCreateOneWithoutMembersInput
  users: UsersCreateOneWithoutMemberOfInput
}

input MembersCreateManyWithoutGuildsInput {
  create: [MembersCreateWithoutGuildsInput!]
  connect: [MembersWhereUniqueInput!]
}

input MembersCreateManyWithoutUsersInput {
  create: [MembersCreateWithoutUsersInput!]
  connect: [MembersWhereUniqueInput!]
}

input MembersCreateWithoutGuildsInput {
  users: UsersCreateOneWithoutMemberOfInput
}

input MembersCreateWithoutUsersInput {
  guilds: GuildsCreateOneWithoutMembersInput
}

type MembersEdge {
  node: Members!
  cursor: String!
}

enum MembersOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MembersPreviousValues {
  id: ID!
}

type MembersSubscriptionPayload {
  mutation: MutationType!
  node: Members
  updatedFields: [String!]
  previousValues: MembersPreviousValues
}

input MembersSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MembersWhereInput
  AND: [MembersSubscriptionWhereInput!]
  OR: [MembersSubscriptionWhereInput!]
  NOT: [MembersSubscriptionWhereInput!]
}

input MembersUpdateInput {
  guilds: GuildsUpdateOneWithoutMembersInput
  users: UsersUpdateOneWithoutMemberOfInput
}

input MembersUpdateManyWithoutGuildsInput {
  create: [MembersCreateWithoutGuildsInput!]
  delete: [MembersWhereUniqueInput!]
  connect: [MembersWhereUniqueInput!]
  disconnect: [MembersWhereUniqueInput!]
  update: [MembersUpdateWithWhereUniqueWithoutGuildsInput!]
  upsert: [MembersUpsertWithWhereUniqueWithoutGuildsInput!]
}

input MembersUpdateManyWithoutUsersInput {
  create: [MembersCreateWithoutUsersInput!]
  delete: [MembersWhereUniqueInput!]
  connect: [MembersWhereUniqueInput!]
  disconnect: [MembersWhereUniqueInput!]
  update: [MembersUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [MembersUpsertWithWhereUniqueWithoutUsersInput!]
}

input MembersUpdateWithoutGuildsDataInput {
  users: UsersUpdateOneWithoutMemberOfInput
}

input MembersUpdateWithoutUsersDataInput {
  guilds: GuildsUpdateOneWithoutMembersInput
}

input MembersUpdateWithWhereUniqueWithoutGuildsInput {
  where: MembersWhereUniqueInput!
  data: MembersUpdateWithoutGuildsDataInput!
}

input MembersUpdateWithWhereUniqueWithoutUsersInput {
  where: MembersWhereUniqueInput!
  data: MembersUpdateWithoutUsersDataInput!
}

input MembersUpsertWithWhereUniqueWithoutGuildsInput {
  where: MembersWhereUniqueInput!
  update: MembersUpdateWithoutGuildsDataInput!
  create: MembersCreateWithoutGuildsInput!
}

input MembersUpsertWithWhereUniqueWithoutUsersInput {
  where: MembersWhereUniqueInput!
  update: MembersUpdateWithoutUsersDataInput!
  create: MembersCreateWithoutUsersInput!
}

input MembersWhereInput {
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
  guilds: GuildsWhereInput
  users: UsersWhereInput
  AND: [MembersWhereInput!]
  OR: [MembersWhereInput!]
  NOT: [MembersWhereInput!]
}

input MembersWhereUniqueInput {
  id: ID
}

type Messages {
  id: ID!
  content: String!
  author: Users
  channel: Channels
}

type MessagesConnection {
  pageInfo: PageInfo!
  edges: [MessagesEdge]!
  aggregate: AggregateMessages!
}

input MessagesCreateInput {
  content: String!
  author: UsersCreateOneWithoutMessagesInput
  channel: ChannelsCreateOneWithoutMessagesInput
}

input MessagesCreateManyWithoutAuthorInput {
  create: [MessagesCreateWithoutAuthorInput!]
  connect: [MessagesWhereUniqueInput!]
}

input MessagesCreateManyWithoutChannelInput {
  create: [MessagesCreateWithoutChannelInput!]
  connect: [MessagesWhereUniqueInput!]
}

input MessagesCreateWithoutAuthorInput {
  content: String!
  channel: ChannelsCreateOneWithoutMessagesInput
}

input MessagesCreateWithoutChannelInput {
  content: String!
  author: UsersCreateOneWithoutMessagesInput
}

type MessagesEdge {
  node: Messages!
  cursor: String!
}

enum MessagesOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagesPreviousValues {
  id: ID!
  content: String!
}

type MessagesSubscriptionPayload {
  mutation: MutationType!
  node: Messages
  updatedFields: [String!]
  previousValues: MessagesPreviousValues
}

input MessagesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessagesWhereInput
  AND: [MessagesSubscriptionWhereInput!]
  OR: [MessagesSubscriptionWhereInput!]
  NOT: [MessagesSubscriptionWhereInput!]
}

input MessagesUpdateInput {
  content: String
  author: UsersUpdateOneWithoutMessagesInput
  channel: ChannelsUpdateOneWithoutMessagesInput
}

input MessagesUpdateManyWithoutAuthorInput {
  create: [MessagesCreateWithoutAuthorInput!]
  delete: [MessagesWhereUniqueInput!]
  connect: [MessagesWhereUniqueInput!]
  disconnect: [MessagesWhereUniqueInput!]
  update: [MessagesUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessagesUpsertWithWhereUniqueWithoutAuthorInput!]
}

input MessagesUpdateManyWithoutChannelInput {
  create: [MessagesCreateWithoutChannelInput!]
  delete: [MessagesWhereUniqueInput!]
  connect: [MessagesWhereUniqueInput!]
  disconnect: [MessagesWhereUniqueInput!]
  update: [MessagesUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessagesUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessagesUpdateWithoutAuthorDataInput {
  content: String
  channel: ChannelsUpdateOneWithoutMessagesInput
}

input MessagesUpdateWithoutChannelDataInput {
  content: String
  author: UsersUpdateOneWithoutMessagesInput
}

input MessagesUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessagesWhereUniqueInput!
  data: MessagesUpdateWithoutAuthorDataInput!
}

input MessagesUpdateWithWhereUniqueWithoutChannelInput {
  where: MessagesWhereUniqueInput!
  data: MessagesUpdateWithoutChannelDataInput!
}

input MessagesUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessagesWhereUniqueInput!
  update: MessagesUpdateWithoutAuthorDataInput!
  create: MessagesCreateWithoutAuthorInput!
}

input MessagesUpsertWithWhereUniqueWithoutChannelInput {
  where: MessagesWhereUniqueInput!
  update: MessagesUpdateWithoutChannelDataInput!
  create: MessagesCreateWithoutChannelInput!
}

input MessagesWhereInput {
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
  author: UsersWhereInput
  channel: ChannelsWhereInput
  AND: [MessagesWhereInput!]
  OR: [MessagesWhereInput!]
  NOT: [MessagesWhereInput!]
}

input MessagesWhereUniqueInput {
  id: ID
}

type Mutation {
  createChannels(data: ChannelsCreateInput!): Channels!
  updateChannels(data: ChannelsUpdateInput!, where: ChannelsWhereUniqueInput!): Channels
  updateManyChannelses(data: ChannelsUpdateInput!, where: ChannelsWhereInput): BatchPayload!
  upsertChannels(where: ChannelsWhereUniqueInput!, create: ChannelsCreateInput!, update: ChannelsUpdateInput!): Channels!
  deleteChannels(where: ChannelsWhereUniqueInput!): Channels
  deleteManyChannelses(where: ChannelsWhereInput): BatchPayload!
  createGuilds(data: GuildsCreateInput!): Guilds!
  updateGuilds(data: GuildsUpdateInput!, where: GuildsWhereUniqueInput!): Guilds
  updateManyGuildses(data: GuildsUpdateInput!, where: GuildsWhereInput): BatchPayload!
  upsertGuilds(where: GuildsWhereUniqueInput!, create: GuildsCreateInput!, update: GuildsUpdateInput!): Guilds!
  deleteGuilds(where: GuildsWhereUniqueInput!): Guilds
  deleteManyGuildses(where: GuildsWhereInput): BatchPayload!
  createMembers(data: MembersCreateInput!): Members!
  updateMembers(data: MembersUpdateInput!, where: MembersWhereUniqueInput!): Members
  updateManyMemberses(data: MembersUpdateInput!, where: MembersWhereInput): BatchPayload!
  upsertMembers(where: MembersWhereUniqueInput!, create: MembersCreateInput!, update: MembersUpdateInput!): Members!
  deleteMembers(where: MembersWhereUniqueInput!): Members
  deleteManyMemberses(where: MembersWhereInput): BatchPayload!
  createMessages(data: MessagesCreateInput!): Messages!
  updateMessages(data: MessagesUpdateInput!, where: MessagesWhereUniqueInput!): Messages
  updateManyMessageses(data: MessagesUpdateInput!, where: MessagesWhereInput): BatchPayload!
  upsertMessages(where: MessagesWhereUniqueInput!, create: MessagesCreateInput!, update: MessagesUpdateInput!): Messages!
  deleteMessages(where: MessagesWhereUniqueInput!): Messages
  deleteManyMessageses(where: MessagesWhereInput): BatchPayload!
  createUsers(data: UsersCreateInput!): Users!
  updateUsers(data: UsersUpdateInput!, where: UsersWhereUniqueInput!): Users
  updateManyUserses(data: UsersUpdateInput!, where: UsersWhereInput): BatchPayload!
  upsertUsers(where: UsersWhereUniqueInput!, create: UsersCreateInput!, update: UsersUpdateInput!): Users!
  deleteUsers(where: UsersWhereUniqueInput!): Users
  deleteManyUserses(where: UsersWhereInput): BatchPayload!
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
  channels(where: ChannelsWhereUniqueInput!): Channels
  channelses(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels]!
  channelsesConnection(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelsConnection!
  guilds(where: GuildsWhereUniqueInput!): Guilds
  guildses(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds]!
  guildsesConnection(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildsConnection!
  members(where: MembersWhereUniqueInput!): Members
  memberses(where: MembersWhereInput, orderBy: MembersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Members]!
  membersesConnection(where: MembersWhereInput, orderBy: MembersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MembersConnection!
  messages(where: MessagesWhereUniqueInput!): Messages
  messageses(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Messages]!
  messagesesConnection(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessagesConnection!
  users(where: UsersWhereUniqueInput!): Users
  userses(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Users]!
  usersesConnection(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsersConnection!
  node(id: ID!): Node
}

type Subscription {
  channels(where: ChannelsSubscriptionWhereInput): ChannelsSubscriptionPayload
  guilds(where: GuildsSubscriptionWhereInput): GuildsSubscriptionPayload
  members(where: MembersSubscriptionWhereInput): MembersSubscriptionPayload
  messages(where: MessagesSubscriptionWhereInput): MessagesSubscriptionPayload
  users(where: UsersSubscriptionWhereInput): UsersSubscriptionPayload
}

type Users {
  id: ID!
  email: String!
  username: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  ownerOf(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds!]
  memberOf(where: MembersWhereInput, orderBy: MembersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Members!]
  messages(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Messages!]
}

type UsersConnection {
  pageInfo: PageInfo!
  edges: [UsersEdge]!
  aggregate: AggregateUsers!
}

input UsersCreateInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildsCreateManyWithoutOwnerInput
  memberOf: MembersCreateManyWithoutUsersInput
  messages: MessagesCreateManyWithoutAuthorInput
}

input UsersCreateOneWithoutMemberOfInput {
  create: UsersCreateWithoutMemberOfInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutMessagesInput {
  create: UsersCreateWithoutMessagesInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutOwnerOfInput {
  create: UsersCreateWithoutOwnerOfInput
  connect: UsersWhereUniqueInput
}

input UsersCreateWithoutMemberOfInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildsCreateManyWithoutOwnerInput
  messages: MessagesCreateManyWithoutAuthorInput
}

input UsersCreateWithoutMessagesInput {
  email: String!
  username: String!
  password: String!
  ownerOf: GuildsCreateManyWithoutOwnerInput
  memberOf: MembersCreateManyWithoutUsersInput
}

input UsersCreateWithoutOwnerOfInput {
  email: String!
  username: String!
  password: String!
  memberOf: MembersCreateManyWithoutUsersInput
  messages: MessagesCreateManyWithoutAuthorInput
}

type UsersEdge {
  node: Users!
  cursor: String!
}

enum UsersOrderByInput {
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

type UsersPreviousValues {
  id: ID!
  email: String!
  username: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UsersSubscriptionPayload {
  mutation: MutationType!
  node: Users
  updatedFields: [String!]
  previousValues: UsersPreviousValues
}

input UsersSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UsersWhereInput
  AND: [UsersSubscriptionWhereInput!]
  OR: [UsersSubscriptionWhereInput!]
  NOT: [UsersSubscriptionWhereInput!]
}

input UsersUpdateInput {
  email: String
  username: String
  password: String
  ownerOf: GuildsUpdateManyWithoutOwnerInput
  memberOf: MembersUpdateManyWithoutUsersInput
  messages: MessagesUpdateManyWithoutAuthorInput
}

input UsersUpdateOneWithoutMemberOfInput {
  create: UsersCreateWithoutMemberOfInput
  update: UsersUpdateWithoutMemberOfDataInput
  upsert: UsersUpsertWithoutMemberOfInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateOneWithoutMessagesInput {
  create: UsersCreateWithoutMessagesInput
  update: UsersUpdateWithoutMessagesDataInput
  upsert: UsersUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateOneWithoutOwnerOfInput {
  create: UsersCreateWithoutOwnerOfInput
  update: UsersUpdateWithoutOwnerOfDataInput
  upsert: UsersUpsertWithoutOwnerOfInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateWithoutMemberOfDataInput {
  email: String
  username: String
  password: String
  ownerOf: GuildsUpdateManyWithoutOwnerInput
  messages: MessagesUpdateManyWithoutAuthorInput
}

input UsersUpdateWithoutMessagesDataInput {
  email: String
  username: String
  password: String
  ownerOf: GuildsUpdateManyWithoutOwnerInput
  memberOf: MembersUpdateManyWithoutUsersInput
}

input UsersUpdateWithoutOwnerOfDataInput {
  email: String
  username: String
  password: String
  memberOf: MembersUpdateManyWithoutUsersInput
  messages: MessagesUpdateManyWithoutAuthorInput
}

input UsersUpsertWithoutMemberOfInput {
  update: UsersUpdateWithoutMemberOfDataInput!
  create: UsersCreateWithoutMemberOfInput!
}

input UsersUpsertWithoutMessagesInput {
  update: UsersUpdateWithoutMessagesDataInput!
  create: UsersCreateWithoutMessagesInput!
}

input UsersUpsertWithoutOwnerOfInput {
  update: UsersUpdateWithoutOwnerOfDataInput!
  create: UsersCreateWithoutOwnerOfInput!
}

input UsersWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  ownerOf_every: GuildsWhereInput
  ownerOf_some: GuildsWhereInput
  ownerOf_none: GuildsWhereInput
  memberOf_every: MembersWhereInput
  memberOf_some: MembersWhereInput
  memberOf_none: MembersWhereInput
  messages_every: MessagesWhereInput
  messages_some: MessagesWhereInput
  messages_none: MessagesWhereInput
  AND: [UsersWhereInput!]
  OR: [UsersWhereInput!]
  NOT: [UsersWhereInput!]
}

input UsersWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    