module.exports = {
        typeDefs: /* GraphQL */ `type AggregateUsers {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
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
  users(where: UsersWhereUniqueInput!): Users
  userses(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Users]!
  usersesConnection(where: UsersWhereInput, orderBy: UsersOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsersConnection!
  node(id: ID!): Node
}

type Subscription {
  users(where: UsersSubscriptionWhereInput): UsersSubscriptionPayload
}

type Users {
  id: ID!
  email: String!
  username: String!
}

type UsersConnection {
  pageInfo: PageInfo!
  edges: [UsersEdge]!
  aggregate: AggregateUsers!
}

input UsersCreateInput {
  email: String!
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
  username: String
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
    