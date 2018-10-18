
src/config/graphQL Files

1) prisma.yml: The root configuration file for your Prisma service.
2) datamodel.graphql: Contains the definition of your data model in SDL (Prisma will translate this into an according database schema).
3) prisma.graphql: Prisma database schema
4) .graphqlconfig.yml

Because the GraphQL CLI “understands” the .graphqlconfig.yml, it knows that it should download the schema from the endpoint specified in prisma.yml and put the generated GraphQL schema definition into src/generated/prisma.graphql, pretty smart huh? 😎
💡 Pro tip: To ensure your Prisma database schema is always in sync with the deployed API, you can also add a post-deploy hook to your prisma.yml file. Whenever you're updating the data model (and therefore the Prisma database schema) by running prisma deploy, the CLI will automatically download the schema for the updated API. 
To do so, add the following code to the end of prisma.yml:


https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/