# Introduction

Acai is a slack clone.

## Getting Started

Install and Setup: Postgresql

```
1. brew install postgresql
2. brew services start postgresql
3. createduser <user>
4. createdb acai
5. psql acai
```

Install and Setup: Prisma

```
1. npm i -g prisma
2. Under construction
```

Environment Setup

```
1. npm run buildEnv
2. npm run setup:gql-server
3. npm run db:setup:gql-server
```

Start Server

```
npm run start

# or, start it from gql-server folder,
cd gql-server && npm run start
```

