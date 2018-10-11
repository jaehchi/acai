module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChannels {
  count: Int!
}

type AggregateCredentials {
  count: Int!
}

type AggregateGuild_channels {
  count: Int!
}

type AggregateGuild_members {
  count: Int!
}

type AggregateGuilds {
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
  channelname: String!
  guild_channels(where: Guild_channelsWhereInput, orderBy: Guild_channelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_channels!]
  guild_id: String!
  messages(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Messages!]
  owner: Users
  type: Int!
}

type ChannelsConnection {
  pageInfo: PageInfo!
  edges: [ChannelsEdge]!
  aggregate: AggregateChannels!
}

input ChannelsCreateInput {
  channelname: String!
  guild_channels: Guild_channelsCreateManyWithoutChannelInput
  guild_id: String!
  messages: MessagesCreateManyWithoutChannelInput
  owner: UsersCreateOneWithoutChannelsInput
  type: Int!
}

input ChannelsCreateManyWithoutOwnerInput {
  create: [ChannelsCreateWithoutOwnerInput!]
  connect: [ChannelsWhereUniqueInput!]
}

input ChannelsCreateOneWithoutGuild_channelsInput {
  create: ChannelsCreateWithoutGuild_channelsInput
  connect: ChannelsWhereUniqueInput
}

input ChannelsCreateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  connect: ChannelsWhereUniqueInput
}

input ChannelsCreateWithoutGuild_channelsInput {
  channelname: String!
  guild_id: String!
  messages: MessagesCreateManyWithoutChannelInput
  owner: UsersCreateOneWithoutChannelsInput
  type: Int!
}

input ChannelsCreateWithoutMessagesInput {
  channelname: String!
  guild_channels: Guild_channelsCreateManyWithoutChannelInput
  guild_id: String!
  owner: UsersCreateOneWithoutChannelsInput
  type: Int!
}

input ChannelsCreateWithoutOwnerInput {
  channelname: String!
  guild_channels: Guild_channelsCreateManyWithoutChannelInput
  guild_id: String!
  messages: MessagesCreateManyWithoutChannelInput
  type: Int!
}

type ChannelsEdge {
  node: Channels!
  cursor: String!
}

enum ChannelsOrderByInput {
  id_ASC
  id_DESC
  channelname_ASC
  channelname_DESC
  guild_id_ASC
  guild_id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelsPreviousValues {
  id: ID!
  channelname: String!
  guild_id: String!
  type: Int!
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
  channelname: String
  guild_channels: Guild_channelsUpdateManyWithoutChannelInput
  guild_id: String
  messages: MessagesUpdateManyWithoutChannelInput
  owner: UsersUpdateOneWithoutChannelsInput
  type: Int
}

input ChannelsUpdateManyWithoutOwnerInput {
  create: [ChannelsCreateWithoutOwnerInput!]
  delete: [ChannelsWhereUniqueInput!]
  connect: [ChannelsWhereUniqueInput!]
  disconnect: [ChannelsWhereUniqueInput!]
  update: [ChannelsUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ChannelsUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ChannelsUpdateOneWithoutGuild_channelsInput {
  create: ChannelsCreateWithoutGuild_channelsInput
  update: ChannelsUpdateWithoutGuild_channelsDataInput
  upsert: ChannelsUpsertWithoutGuild_channelsInput
  delete: Boolean
  disconnect: Boolean
  connect: ChannelsWhereUniqueInput
}

input ChannelsUpdateOneWithoutMessagesInput {
  create: ChannelsCreateWithoutMessagesInput
  update: ChannelsUpdateWithoutMessagesDataInput
  upsert: ChannelsUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: ChannelsWhereUniqueInput
}

input ChannelsUpdateWithoutGuild_channelsDataInput {
  channelname: String
  guild_id: String
  messages: MessagesUpdateManyWithoutChannelInput
  owner: UsersUpdateOneWithoutChannelsInput
  type: Int
}

input ChannelsUpdateWithoutMessagesDataInput {
  channelname: String
  guild_channels: Guild_channelsUpdateManyWithoutChannelInput
  guild_id: String
  owner: UsersUpdateOneWithoutChannelsInput
  type: Int
}

input ChannelsUpdateWithoutOwnerDataInput {
  channelname: String
  guild_channels: Guild_channelsUpdateManyWithoutChannelInput
  guild_id: String
  messages: MessagesUpdateManyWithoutChannelInput
  type: Int
}

input ChannelsUpdateWithWhereUniqueWithoutOwnerInput {
  where: ChannelsWhereUniqueInput!
  data: ChannelsUpdateWithoutOwnerDataInput!
}

input ChannelsUpsertWithoutGuild_channelsInput {
  update: ChannelsUpdateWithoutGuild_channelsDataInput!
  create: ChannelsCreateWithoutGuild_channelsInput!
}

input ChannelsUpsertWithoutMessagesInput {
  update: ChannelsUpdateWithoutMessagesDataInput!
  create: ChannelsCreateWithoutMessagesInput!
}

input ChannelsUpsertWithWhereUniqueWithoutOwnerInput {
  where: ChannelsWhereUniqueInput!
  update: ChannelsUpdateWithoutOwnerDataInput!
  create: ChannelsCreateWithoutOwnerInput!
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
  guild_channels_every: Guild_channelsWhereInput
  guild_channels_some: Guild_channelsWhereInput
  guild_channels_none: Guild_channelsWhereInput
  guild_id: String
  guild_id_not: String
  guild_id_in: [String!]
  guild_id_not_in: [String!]
  guild_id_lt: String
  guild_id_lte: String
  guild_id_gt: String
  guild_id_gte: String
  guild_id_contains: String
  guild_id_not_contains: String
  guild_id_starts_with: String
  guild_id_not_starts_with: String
  guild_id_ends_with: String
  guild_id_not_ends_with: String
  messages_every: MessagesWhereInput
  messages_some: MessagesWhereInput
  messages_none: MessagesWhereInput
  owner: UsersWhereInput
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  AND: [ChannelsWhereInput!]
  OR: [ChannelsWhereInput!]
  NOT: [ChannelsWhereInput!]
}

input ChannelsWhereUniqueInput {
  id: ID
}

type Credentials {
  id: ID!
  password: String!
  user: Users
}

type CredentialsConnection {
  pageInfo: PageInfo!
  edges: [CredentialsEdge]!
  aggregate: AggregateCredentials!
}

input CredentialsCreateInput {
  password: String!
  user: UsersCreateOneWithoutCredentialsInput
}

input CredentialsCreateManyWithoutUserInput {
  create: [CredentialsCreateWithoutUserInput!]
  connect: [CredentialsWhereUniqueInput!]
}

input CredentialsCreateWithoutUserInput {
  password: String!
}

type CredentialsEdge {
  node: Credentials!
  cursor: String!
}

enum CredentialsOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CredentialsPreviousValues {
  id: ID!
  password: String!
}

type CredentialsSubscriptionPayload {
  mutation: MutationType!
  node: Credentials
  updatedFields: [String!]
  previousValues: CredentialsPreviousValues
}

input CredentialsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CredentialsWhereInput
  AND: [CredentialsSubscriptionWhereInput!]
  OR: [CredentialsSubscriptionWhereInput!]
  NOT: [CredentialsSubscriptionWhereInput!]
}

input CredentialsUpdateInput {
  password: String
  user: UsersUpdateOneWithoutCredentialsInput
}

input CredentialsUpdateManyWithoutUserInput {
  create: [CredentialsCreateWithoutUserInput!]
  delete: [CredentialsWhereUniqueInput!]
  connect: [CredentialsWhereUniqueInput!]
  disconnect: [CredentialsWhereUniqueInput!]
  update: [CredentialsUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CredentialsUpsertWithWhereUniqueWithoutUserInput!]
}

input CredentialsUpdateWithoutUserDataInput {
  password: String
}

input CredentialsUpdateWithWhereUniqueWithoutUserInput {
  where: CredentialsWhereUniqueInput!
  data: CredentialsUpdateWithoutUserDataInput!
}

input CredentialsUpsertWithWhereUniqueWithoutUserInput {
  where: CredentialsWhereUniqueInput!
  update: CredentialsUpdateWithoutUserDataInput!
  create: CredentialsCreateWithoutUserInput!
}

input CredentialsWhereInput {
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
  user: UsersWhereInput
  AND: [CredentialsWhereInput!]
  OR: [CredentialsWhereInput!]
  NOT: [CredentialsWhereInput!]
}

input CredentialsWhereUniqueInput {
  id: ID
}

type Guild_channels {
  id: ID!
  channel: Channels
  guild: Guilds
}

type Guild_channelsConnection {
  pageInfo: PageInfo!
  edges: [Guild_channelsEdge]!
  aggregate: AggregateGuild_channels!
}

input Guild_channelsCreateInput {
  channel: ChannelsCreateOneWithoutGuild_channelsInput
  guild: GuildsCreateOneWithoutGuild_channelsInput
}

input Guild_channelsCreateManyWithoutChannelInput {
  create: [Guild_channelsCreateWithoutChannelInput!]
  connect: [Guild_channelsWhereUniqueInput!]
}

input Guild_channelsCreateManyWithoutGuildInput {
  create: [Guild_channelsCreateWithoutGuildInput!]
  connect: [Guild_channelsWhereUniqueInput!]
}

input Guild_channelsCreateWithoutChannelInput {
  guild: GuildsCreateOneWithoutGuild_channelsInput
}

input Guild_channelsCreateWithoutGuildInput {
  channel: ChannelsCreateOneWithoutGuild_channelsInput
}

type Guild_channelsEdge {
  node: Guild_channels!
  cursor: String!
}

enum Guild_channelsOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Guild_channelsPreviousValues {
  id: ID!
}

type Guild_channelsSubscriptionPayload {
  mutation: MutationType!
  node: Guild_channels
  updatedFields: [String!]
  previousValues: Guild_channelsPreviousValues
}

input Guild_channelsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Guild_channelsWhereInput
  AND: [Guild_channelsSubscriptionWhereInput!]
  OR: [Guild_channelsSubscriptionWhereInput!]
  NOT: [Guild_channelsSubscriptionWhereInput!]
}

input Guild_channelsUpdateInput {
  channel: ChannelsUpdateOneWithoutGuild_channelsInput
  guild: GuildsUpdateOneWithoutGuild_channelsInput
}

input Guild_channelsUpdateManyWithoutChannelInput {
  create: [Guild_channelsCreateWithoutChannelInput!]
  delete: [Guild_channelsWhereUniqueInput!]
  connect: [Guild_channelsWhereUniqueInput!]
  disconnect: [Guild_channelsWhereUniqueInput!]
  update: [Guild_channelsUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [Guild_channelsUpsertWithWhereUniqueWithoutChannelInput!]
}

input Guild_channelsUpdateManyWithoutGuildInput {
  create: [Guild_channelsCreateWithoutGuildInput!]
  delete: [Guild_channelsWhereUniqueInput!]
  connect: [Guild_channelsWhereUniqueInput!]
  disconnect: [Guild_channelsWhereUniqueInput!]
  update: [Guild_channelsUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [Guild_channelsUpsertWithWhereUniqueWithoutGuildInput!]
}

input Guild_channelsUpdateWithoutChannelDataInput {
  guild: GuildsUpdateOneWithoutGuild_channelsInput
}

input Guild_channelsUpdateWithoutGuildDataInput {
  channel: ChannelsUpdateOneWithoutGuild_channelsInput
}

input Guild_channelsUpdateWithWhereUniqueWithoutChannelInput {
  where: Guild_channelsWhereUniqueInput!
  data: Guild_channelsUpdateWithoutChannelDataInput!
}

input Guild_channelsUpdateWithWhereUniqueWithoutGuildInput {
  where: Guild_channelsWhereUniqueInput!
  data: Guild_channelsUpdateWithoutGuildDataInput!
}

input Guild_channelsUpsertWithWhereUniqueWithoutChannelInput {
  where: Guild_channelsWhereUniqueInput!
  update: Guild_channelsUpdateWithoutChannelDataInput!
  create: Guild_channelsCreateWithoutChannelInput!
}

input Guild_channelsUpsertWithWhereUniqueWithoutGuildInput {
  where: Guild_channelsWhereUniqueInput!
  update: Guild_channelsUpdateWithoutGuildDataInput!
  create: Guild_channelsCreateWithoutGuildInput!
}

input Guild_channelsWhereInput {
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
  channel: ChannelsWhereInput
  guild: GuildsWhereInput
  AND: [Guild_channelsWhereInput!]
  OR: [Guild_channelsWhereInput!]
  NOT: [Guild_channelsWhereInput!]
}

input Guild_channelsWhereUniqueInput {
  id: ID
}

type Guild_members {
  id: ID!
  guild: Guilds
  user: Users
}

type Guild_membersConnection {
  pageInfo: PageInfo!
  edges: [Guild_membersEdge]!
  aggregate: AggregateGuild_members!
}

input Guild_membersCreateInput {
  guild: GuildsCreateOneWithoutGuild_membersInput
  user: UsersCreateOneWithoutGuild_membersInput
}

input Guild_membersCreateManyWithoutGuildInput {
  create: [Guild_membersCreateWithoutGuildInput!]
  connect: [Guild_membersWhereUniqueInput!]
}

input Guild_membersCreateManyWithoutUserInput {
  create: [Guild_membersCreateWithoutUserInput!]
  connect: [Guild_membersWhereUniqueInput!]
}

input Guild_membersCreateWithoutGuildInput {
  user: UsersCreateOneWithoutGuild_membersInput
}

input Guild_membersCreateWithoutUserInput {
  guild: GuildsCreateOneWithoutGuild_membersInput
}

type Guild_membersEdge {
  node: Guild_members!
  cursor: String!
}

enum Guild_membersOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type Guild_membersPreviousValues {
  id: ID!
}

type Guild_membersSubscriptionPayload {
  mutation: MutationType!
  node: Guild_members
  updatedFields: [String!]
  previousValues: Guild_membersPreviousValues
}

input Guild_membersSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: Guild_membersWhereInput
  AND: [Guild_membersSubscriptionWhereInput!]
  OR: [Guild_membersSubscriptionWhereInput!]
  NOT: [Guild_membersSubscriptionWhereInput!]
}

input Guild_membersUpdateInput {
  guild: GuildsUpdateOneWithoutGuild_membersInput
  user: UsersUpdateOneWithoutGuild_membersInput
}

input Guild_membersUpdateManyWithoutGuildInput {
  create: [Guild_membersCreateWithoutGuildInput!]
  delete: [Guild_membersWhereUniqueInput!]
  connect: [Guild_membersWhereUniqueInput!]
  disconnect: [Guild_membersWhereUniqueInput!]
  update: [Guild_membersUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [Guild_membersUpsertWithWhereUniqueWithoutGuildInput!]
}

input Guild_membersUpdateManyWithoutUserInput {
  create: [Guild_membersCreateWithoutUserInput!]
  delete: [Guild_membersWhereUniqueInput!]
  connect: [Guild_membersWhereUniqueInput!]
  disconnect: [Guild_membersWhereUniqueInput!]
  update: [Guild_membersUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [Guild_membersUpsertWithWhereUniqueWithoutUserInput!]
}

input Guild_membersUpdateWithoutGuildDataInput {
  user: UsersUpdateOneWithoutGuild_membersInput
}

input Guild_membersUpdateWithoutUserDataInput {
  guild: GuildsUpdateOneWithoutGuild_membersInput
}

input Guild_membersUpdateWithWhereUniqueWithoutGuildInput {
  where: Guild_membersWhereUniqueInput!
  data: Guild_membersUpdateWithoutGuildDataInput!
}

input Guild_membersUpdateWithWhereUniqueWithoutUserInput {
  where: Guild_membersWhereUniqueInput!
  data: Guild_membersUpdateWithoutUserDataInput!
}

input Guild_membersUpsertWithWhereUniqueWithoutGuildInput {
  where: Guild_membersWhereUniqueInput!
  update: Guild_membersUpdateWithoutGuildDataInput!
  create: Guild_membersCreateWithoutGuildInput!
}

input Guild_membersUpsertWithWhereUniqueWithoutUserInput {
  where: Guild_membersWhereUniqueInput!
  update: Guild_membersUpdateWithoutUserDataInput!
  create: Guild_membersCreateWithoutUserInput!
}

input Guild_membersWhereInput {
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
  guild: GuildsWhereInput
  user: UsersWhereInput
  AND: [Guild_membersWhereInput!]
  OR: [Guild_membersWhereInput!]
  NOT: [Guild_membersWhereInput!]
}

input Guild_membersWhereUniqueInput {
  id: ID
}

type Guilds {
  id: ID!
  guild_channels(where: Guild_channelsWhereInput, orderBy: Guild_channelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_channels!]
  guild_members(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members!]
  guildname: String!
  owner: String!
}

type GuildsConnection {
  pageInfo: PageInfo!
  edges: [GuildsEdge]!
  aggregate: AggregateGuilds!
}

input GuildsCreateInput {
  guild_channels: Guild_channelsCreateManyWithoutGuildInput
  guild_members: Guild_membersCreateManyWithoutGuildInput
  guildname: String!
  owner: String!
}

input GuildsCreateManyInput {
  create: [GuildsCreateInput!]
  connect: [GuildsWhereUniqueInput!]
}

input GuildsCreateOneWithoutGuild_channelsInput {
  create: GuildsCreateWithoutGuild_channelsInput
  connect: GuildsWhereUniqueInput
}

input GuildsCreateOneWithoutGuild_membersInput {
  create: GuildsCreateWithoutGuild_membersInput
  connect: GuildsWhereUniqueInput
}

input GuildsCreateWithoutGuild_channelsInput {
  guild_members: Guild_membersCreateManyWithoutGuildInput
  guildname: String!
  owner: String!
}

input GuildsCreateWithoutGuild_membersInput {
  guild_channels: Guild_channelsCreateManyWithoutGuildInput
  guildname: String!
  owner: String!
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
  owner_ASC
  owner_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildsPreviousValues {
  id: ID!
  guildname: String!
  owner: String!
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

input GuildsUpdateDataInput {
  guild_channels: Guild_channelsUpdateManyWithoutGuildInput
  guild_members: Guild_membersUpdateManyWithoutGuildInput
  guildname: String
  owner: String
}

input GuildsUpdateInput {
  guild_channels: Guild_channelsUpdateManyWithoutGuildInput
  guild_members: Guild_membersUpdateManyWithoutGuildInput
  guildname: String
  owner: String
}

input GuildsUpdateManyInput {
  create: [GuildsCreateInput!]
  update: [GuildsUpdateWithWhereUniqueNestedInput!]
  upsert: [GuildsUpsertWithWhereUniqueNestedInput!]
  delete: [GuildsWhereUniqueInput!]
  connect: [GuildsWhereUniqueInput!]
  disconnect: [GuildsWhereUniqueInput!]
}

input GuildsUpdateOneWithoutGuild_channelsInput {
  create: GuildsCreateWithoutGuild_channelsInput
  update: GuildsUpdateWithoutGuild_channelsDataInput
  upsert: GuildsUpsertWithoutGuild_channelsInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildsWhereUniqueInput
}

input GuildsUpdateOneWithoutGuild_membersInput {
  create: GuildsCreateWithoutGuild_membersInput
  update: GuildsUpdateWithoutGuild_membersDataInput
  upsert: GuildsUpsertWithoutGuild_membersInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildsWhereUniqueInput
}

input GuildsUpdateWithoutGuild_channelsDataInput {
  guild_members: Guild_membersUpdateManyWithoutGuildInput
  guildname: String
  owner: String
}

input GuildsUpdateWithoutGuild_membersDataInput {
  guild_channels: Guild_channelsUpdateManyWithoutGuildInput
  guildname: String
  owner: String
}

input GuildsUpdateWithWhereUniqueNestedInput {
  where: GuildsWhereUniqueInput!
  data: GuildsUpdateDataInput!
}

input GuildsUpsertWithoutGuild_channelsInput {
  update: GuildsUpdateWithoutGuild_channelsDataInput!
  create: GuildsCreateWithoutGuild_channelsInput!
}

input GuildsUpsertWithoutGuild_membersInput {
  update: GuildsUpdateWithoutGuild_membersDataInput!
  create: GuildsCreateWithoutGuild_membersInput!
}

input GuildsUpsertWithWhereUniqueNestedInput {
  where: GuildsWhereUniqueInput!
  update: GuildsUpdateDataInput!
  create: GuildsCreateInput!
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
  guild_channels_every: Guild_channelsWhereInput
  guild_channels_some: Guild_channelsWhereInput
  guild_channels_none: Guild_channelsWhereInput
  guild_members_every: Guild_membersWhereInput
  guild_members_some: Guild_membersWhereInput
  guild_members_none: Guild_membersWhereInput
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
  owner: String
  owner_not: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_lt: String
  owner_lte: String
  owner_gt: String
  owner_gte: String
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  AND: [GuildsWhereInput!]
  OR: [GuildsWhereInput!]
  NOT: [GuildsWhereInput!]
}

input GuildsWhereUniqueInput {
  id: ID
}

scalar Long

type Messages {
  id: ID!
  author: Users
  channel: Channels
  content: String!
}

type MessagesConnection {
  pageInfo: PageInfo!
  edges: [MessagesEdge]!
  aggregate: AggregateMessages!
}

input MessagesCreateInput {
  author: UsersCreateOneWithoutMessagesInput
  channel: ChannelsCreateOneWithoutMessagesInput
  content: String!
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
  channel: ChannelsCreateOneWithoutMessagesInput
  content: String!
}

input MessagesCreateWithoutChannelInput {
  author: UsersCreateOneWithoutMessagesInput
  content: String!
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
  author: UsersUpdateOneWithoutMessagesInput
  channel: ChannelsUpdateOneWithoutMessagesInput
  content: String
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
  channel: ChannelsUpdateOneWithoutMessagesInput
  content: String
}

input MessagesUpdateWithoutChannelDataInput {
  author: UsersUpdateOneWithoutMessagesInput
  content: String
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
  author: UsersWhereInput
  channel: ChannelsWhereInput
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
  createCredentials(data: CredentialsCreateInput!): Credentials!
  updateCredentials(data: CredentialsUpdateInput!, where: CredentialsWhereUniqueInput!): Credentials
  updateManyCredentialses(data: CredentialsUpdateInput!, where: CredentialsWhereInput): BatchPayload!
  upsertCredentials(where: CredentialsWhereUniqueInput!, create: CredentialsCreateInput!, update: CredentialsUpdateInput!): Credentials!
  deleteCredentials(where: CredentialsWhereUniqueInput!): Credentials
  deleteManyCredentialses(where: CredentialsWhereInput): BatchPayload!
  createGuild_channels(data: Guild_channelsCreateInput!): Guild_channels!
  updateGuild_channels(data: Guild_channelsUpdateInput!, where: Guild_channelsWhereUniqueInput!): Guild_channels
  updateManyGuild_channelses(data: Guild_channelsUpdateInput!, where: Guild_channelsWhereInput): BatchPayload!
  upsertGuild_channels(where: Guild_channelsWhereUniqueInput!, create: Guild_channelsCreateInput!, update: Guild_channelsUpdateInput!): Guild_channels!
  deleteGuild_channels(where: Guild_channelsWhereUniqueInput!): Guild_channels
  deleteManyGuild_channelses(where: Guild_channelsWhereInput): BatchPayload!
  createGuild_members(data: Guild_membersCreateInput!): Guild_members!
  updateGuild_members(data: Guild_membersUpdateInput!, where: Guild_membersWhereUniqueInput!): Guild_members
  updateManyGuild_memberses(data: Guild_membersUpdateInput!, where: Guild_membersWhereInput): BatchPayload!
  upsertGuild_members(where: Guild_membersWhereUniqueInput!, create: Guild_membersCreateInput!, update: Guild_membersUpdateInput!): Guild_members!
  deleteGuild_members(where: Guild_membersWhereUniqueInput!): Guild_members
  deleteManyGuild_memberses(where: Guild_membersWhereInput): BatchPayload!
  createGuilds(data: GuildsCreateInput!): Guilds!
  updateGuilds(data: GuildsUpdateInput!, where: GuildsWhereUniqueInput!): Guilds
  updateManyGuildses(data: GuildsUpdateInput!, where: GuildsWhereInput): BatchPayload!
  upsertGuilds(where: GuildsWhereUniqueInput!, create: GuildsCreateInput!, update: GuildsUpdateInput!): Guilds!
  deleteGuilds(where: GuildsWhereUniqueInput!): Guilds
  deleteManyGuildses(where: GuildsWhereInput): BatchPayload!
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
  credentials(where: CredentialsWhereUniqueInput!): Credentials
  credentialses(where: CredentialsWhereInput, orderBy: CredentialsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Credentials]!
  credentialsesConnection(where: CredentialsWhereInput, orderBy: CredentialsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CredentialsConnection!
  guild_channels(where: Guild_channelsWhereUniqueInput!): Guild_channels
  guild_channelses(where: Guild_channelsWhereInput, orderBy: Guild_channelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_channels]!
  guild_channelsesConnection(where: Guild_channelsWhereInput, orderBy: Guild_channelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Guild_channelsConnection!
  guild_members(where: Guild_membersWhereUniqueInput!): Guild_members
  guild_memberses(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members]!
  guild_membersesConnection(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Guild_membersConnection!
  guilds(where: GuildsWhereUniqueInput!): Guilds
  guildses(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds]!
  guildsesConnection(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildsConnection!
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
  credentials(where: CredentialsSubscriptionWhereInput): CredentialsSubscriptionPayload
  guild_channels(where: Guild_channelsSubscriptionWhereInput): Guild_channelsSubscriptionPayload
  guild_members(where: Guild_membersSubscriptionWhereInput): Guild_membersSubscriptionPayload
  guilds(where: GuildsSubscriptionWhereInput): GuildsSubscriptionPayload
  messages(where: MessagesSubscriptionWhereInput): MessagesSubscriptionPayload
  users(where: UsersSubscriptionWhereInput): UsersSubscriptionPayload
}

type Users {
  id: ID!
  channels(where: ChannelsWhereInput, orderBy: ChannelsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channels!]
  credentials(where: CredentialsWhereInput, orderBy: CredentialsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Credentials!]
  email: String!
  guild_members(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members!]
  guilds(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds!]
  messages(where: MessagesWhereInput, orderBy: MessagesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Messages!]
  username: String!
}

type UsersConnection {
  pageInfo: PageInfo!
  edges: [UsersEdge]!
  aggregate: AggregateUsers!
}

input UsersCreateInput {
  channels: ChannelsCreateManyWithoutOwnerInput
  credentials: CredentialsCreateManyWithoutUserInput
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
  guilds: GuildsCreateManyInput
  messages: MessagesCreateManyWithoutAuthorInput
  username: String!
}

input UsersCreateOneWithoutChannelsInput {
  create: UsersCreateWithoutChannelsInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutCredentialsInput {
  create: UsersCreateWithoutCredentialsInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutGuild_membersInput {
  create: UsersCreateWithoutGuild_membersInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutMessagesInput {
  create: UsersCreateWithoutMessagesInput
  connect: UsersWhereUniqueInput
}

input UsersCreateWithoutChannelsInput {
  credentials: CredentialsCreateManyWithoutUserInput
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
  guilds: GuildsCreateManyInput
  messages: MessagesCreateManyWithoutAuthorInput
  username: String!
}

input UsersCreateWithoutCredentialsInput {
  channels: ChannelsCreateManyWithoutOwnerInput
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
  guilds: GuildsCreateManyInput
  messages: MessagesCreateManyWithoutAuthorInput
  username: String!
}

input UsersCreateWithoutGuild_membersInput {
  channels: ChannelsCreateManyWithoutOwnerInput
  credentials: CredentialsCreateManyWithoutUserInput
  email: String!
  guilds: GuildsCreateManyInput
  messages: MessagesCreateManyWithoutAuthorInput
  username: String!
}

input UsersCreateWithoutMessagesInput {
  channels: ChannelsCreateManyWithoutOwnerInput
  credentials: CredentialsCreateManyWithoutUserInput
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
  guilds: GuildsCreateManyInput
  username: String!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UsersPreviousValues {
  id: ID!
  email: String!
  username: String!
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
  channels: ChannelsUpdateManyWithoutOwnerInput
  credentials: CredentialsUpdateManyWithoutUserInput
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  guilds: GuildsUpdateManyInput
  messages: MessagesUpdateManyWithoutAuthorInput
  username: String
}

input UsersUpdateOneWithoutChannelsInput {
  create: UsersCreateWithoutChannelsInput
  update: UsersUpdateWithoutChannelsDataInput
  upsert: UsersUpsertWithoutChannelsInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateOneWithoutCredentialsInput {
  create: UsersCreateWithoutCredentialsInput
  update: UsersUpdateWithoutCredentialsDataInput
  upsert: UsersUpsertWithoutCredentialsInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateOneWithoutGuild_membersInput {
  create: UsersCreateWithoutGuild_membersInput
  update: UsersUpdateWithoutGuild_membersDataInput
  upsert: UsersUpsertWithoutGuild_membersInput
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

input UsersUpdateWithoutChannelsDataInput {
  credentials: CredentialsUpdateManyWithoutUserInput
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  guilds: GuildsUpdateManyInput
  messages: MessagesUpdateManyWithoutAuthorInput
  username: String
}

input UsersUpdateWithoutCredentialsDataInput {
  channels: ChannelsUpdateManyWithoutOwnerInput
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  guilds: GuildsUpdateManyInput
  messages: MessagesUpdateManyWithoutAuthorInput
  username: String
}

input UsersUpdateWithoutGuild_membersDataInput {
  channels: ChannelsUpdateManyWithoutOwnerInput
  credentials: CredentialsUpdateManyWithoutUserInput
  email: String
  guilds: GuildsUpdateManyInput
  messages: MessagesUpdateManyWithoutAuthorInput
  username: String
}

input UsersUpdateWithoutMessagesDataInput {
  channels: ChannelsUpdateManyWithoutOwnerInput
  credentials: CredentialsUpdateManyWithoutUserInput
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  guilds: GuildsUpdateManyInput
  username: String
}

input UsersUpsertWithoutChannelsInput {
  update: UsersUpdateWithoutChannelsDataInput!
  create: UsersCreateWithoutChannelsInput!
}

input UsersUpsertWithoutCredentialsInput {
  update: UsersUpdateWithoutCredentialsDataInput!
  create: UsersCreateWithoutCredentialsInput!
}

input UsersUpsertWithoutGuild_membersInput {
  update: UsersUpdateWithoutGuild_membersDataInput!
  create: UsersCreateWithoutGuild_membersInput!
}

input UsersUpsertWithoutMessagesInput {
  update: UsersUpdateWithoutMessagesDataInput!
  create: UsersCreateWithoutMessagesInput!
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
  channels_every: ChannelsWhereInput
  channels_some: ChannelsWhereInput
  channels_none: ChannelsWhereInput
  credentials_every: CredentialsWhereInput
  credentials_some: CredentialsWhereInput
  credentials_none: CredentialsWhereInput
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
  guild_members_every: Guild_membersWhereInput
  guild_members_some: Guild_membersWhereInput
  guild_members_none: Guild_membersWhereInput
  guilds_every: GuildsWhereInput
  guilds_some: GuildsWhereInput
  guilds_none: GuildsWhereInput
  messages_every: MessagesWhereInput
  messages_some: MessagesWhereInput
  messages_none: MessagesWhereInput
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
    