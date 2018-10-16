module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGuild_members {
  count: Int!
}

type AggregateGuilds {
  count: Int!
}

type AggregateUsers {
  count: Int!
}

type BatchPayload {
  count: Long!
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
  guild_members(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members!]
  guildname: String!
  owner: Users
}

type GuildsConnection {
  pageInfo: PageInfo!
  edges: [GuildsEdge]!
  aggregate: AggregateGuilds!
}

input GuildsCreateInput {
  guild_members: Guild_membersCreateManyWithoutGuildInput
  guildname: String!
  owner: UsersCreateOneWithoutGuildsInput
}

input GuildsCreateManyWithoutOwnerInput {
  create: [GuildsCreateWithoutOwnerInput!]
  connect: [GuildsWhereUniqueInput!]
}

input GuildsCreateOneWithoutGuild_membersInput {
  create: GuildsCreateWithoutGuild_membersInput
  connect: GuildsWhereUniqueInput
}

input GuildsCreateWithoutGuild_membersInput {
  guildname: String!
  owner: UsersCreateOneWithoutGuildsInput
}

input GuildsCreateWithoutOwnerInput {
  guild_members: Guild_membersCreateManyWithoutGuildInput
  guildname: String!
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
  guild_members: Guild_membersUpdateManyWithoutGuildInput
  guildname: String
  owner: UsersUpdateOneWithoutGuildsInput
}

input GuildsUpdateManyWithoutOwnerInput {
  create: [GuildsCreateWithoutOwnerInput!]
  delete: [GuildsWhereUniqueInput!]
  connect: [GuildsWhereUniqueInput!]
  disconnect: [GuildsWhereUniqueInput!]
  update: [GuildsUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GuildsUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GuildsUpdateOneWithoutGuild_membersInput {
  create: GuildsCreateWithoutGuild_membersInput
  update: GuildsUpdateWithoutGuild_membersDataInput
  upsert: GuildsUpsertWithoutGuild_membersInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildsWhereUniqueInput
}

input GuildsUpdateWithoutGuild_membersDataInput {
  guildname: String
  owner: UsersUpdateOneWithoutGuildsInput
}

input GuildsUpdateWithoutOwnerDataInput {
  guild_members: Guild_membersUpdateManyWithoutGuildInput
  guildname: String
}

input GuildsUpdateWithWhereUniqueWithoutOwnerInput {
  where: GuildsWhereUniqueInput!
  data: GuildsUpdateWithoutOwnerDataInput!
}

input GuildsUpsertWithoutGuild_membersInput {
  update: GuildsUpdateWithoutGuild_membersDataInput!
  create: GuildsCreateWithoutGuild_membersInput!
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
  owner: UsersWhereInput
  AND: [GuildsWhereInput!]
  OR: [GuildsWhereInput!]
  NOT: [GuildsWhereInput!]
}

input GuildsWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
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
  guild_members(where: Guild_membersWhereUniqueInput!): Guild_members
  guild_memberses(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members]!
  guild_membersesConnection(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): Guild_membersConnection!
  guilds(where: GuildsWhereUniqueInput!): Guilds
  guildses(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds]!
  guildsesConnection(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildsConnection!
  users(where: UsersWhereUniqueInput!): Users
  userses(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Users]!
  usersesConnection(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsersConnection!
  node(id: ID!): Node
}

type Subscription {
  guild_members(where: Guild_membersSubscriptionWhereInput): Guild_membersSubscriptionPayload
  guilds(where: GuildsSubscriptionWhereInput): GuildsSubscriptionPayload
  users(where: UsersSubscriptionWhereInput): UsersSubscriptionPayload
}

type Users {
  id: ID!
  email: String!
  guild_members(where: Guild_membersWhereInput, orderBy: Guild_membersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild_members!]
  guilds(where: GuildsWhereInput, orderBy: GuildsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guilds!]
  username: String!
}

type UsersConnection {
  pageInfo: PageInfo!
  edges: [UsersEdge]!
  aggregate: AggregateUsers!
}

input UsersCreateInput {
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
  guilds: GuildsCreateManyWithoutOwnerInput
  username: String!
}

input UsersCreateOneWithoutGuild_membersInput {
  create: UsersCreateWithoutGuild_membersInput
  connect: UsersWhereUniqueInput
}

input UsersCreateOneWithoutGuildsInput {
  create: UsersCreateWithoutGuildsInput
  connect: UsersWhereUniqueInput
}

input UsersCreateWithoutGuild_membersInput {
  email: String!
  guilds: GuildsCreateManyWithoutOwnerInput
  username: String!
}

input UsersCreateWithoutGuildsInput {
  email: String!
  guild_members: Guild_membersCreateManyWithoutUserInput
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
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  guilds: GuildsUpdateManyWithoutOwnerInput
  username: String
}

input UsersUpdateOneWithoutGuild_membersInput {
  create: UsersCreateWithoutGuild_membersInput
  update: UsersUpdateWithoutGuild_membersDataInput
  upsert: UsersUpsertWithoutGuild_membersInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateOneWithoutGuildsInput {
  create: UsersCreateWithoutGuildsInput
  update: UsersUpdateWithoutGuildsDataInput
  upsert: UsersUpsertWithoutGuildsInput
  delete: Boolean
  disconnect: Boolean
  connect: UsersWhereUniqueInput
}

input UsersUpdateWithoutGuild_membersDataInput {
  email: String
  guilds: GuildsUpdateManyWithoutOwnerInput
  username: String
}

input UsersUpdateWithoutGuildsDataInput {
  email: String
  guild_members: Guild_membersUpdateManyWithoutUserInput
  username: String
}

input UsersUpsertWithoutGuild_membersInput {
  update: UsersUpdateWithoutGuild_membersDataInput!
  create: UsersCreateWithoutGuild_membersInput!
}

input UsersUpsertWithoutGuildsInput {
  update: UsersUpdateWithoutGuildsDataInput!
  create: UsersCreateWithoutGuildsInput!
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
  guild_members_every: Guild_membersWhereInput
  guild_members_some: Guild_membersWhereInput
  guild_members_none: Guild_membersWhereInput
  guilds_every: GuildsWhereInput
  guilds_some: GuildsWhereInput
  guilds_none: GuildsWhereInput
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
    