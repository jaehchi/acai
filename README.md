# Introduction

Acai is a discord clone.

## Getting Started

Environment Setup

```
  1. npm i 
  2. npm run buildEnv
  3. npm run setup:all
  4. npm run db:setup:server
  5. npm run build
```

Install and Setup: Prisma's Demo Server

```
1. npm i -g prisma
2. cd gql-server/src/config/graphQL/prismaLayer
3. Register with Prisma Cloud. This is needed because that's where the Demo server is hosted.
4. prisma deploy
5. Confirm the suggested values for the following questions with Return:
````
  1. Set up a new Prisma server or deploy to an existing server?:  `Demo server`
  2. The region where Prisma service should be hosted
  3. The name for Prisma service
  4. The stage for Prisma service
  5. Select Prisma JavaScript Client to generate Prisma client for Node.js.
````
6. You will be prompted with two endpoints: HTTP & WS
````
  HTTP:  https://us1.prisma.sh/<prisma cloud accountname>/<service name>/<stage>
  WS:    wss://us1.prisma.sh/<prisma cloud accountname>/<service name>/<stage>
````
7. Add HTTP endpoint to PRISMA_ENDPOINT in .env file.
8. cd gql-server && npm run prisma:deploy
9. All Done. 

# Make sure to run prisma deploy/ get-schema with the scripts to use ENV variables in prisma.yml/.graphqlconfig.yml

Start Server

```
  cd into `server`, `image-server`, and `gql-server` individually && `npm run start`

  # or, start all servers together from the root folder,
  `npm run start:all`
```

