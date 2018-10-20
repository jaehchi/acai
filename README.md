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
1. npm i 
2. npm run buildEnv
3. npm run setup:server
4. npm run db:setup:server
5. npm run build
```

Start Server

```
npm run start

# or, start it from server folder,
cd server && npm run start
```

