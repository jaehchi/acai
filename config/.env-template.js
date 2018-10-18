const envBuild = {
  'gql-server': [
    'DEBUG=TRUE',
    'NODE_ENV=development',
    'PORT=4000',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=acai',
    'LOCAL_PASSWORD=acai',
    'LOCAL_PORT=5432',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    'SALT_ROUNDS=10',
    'TOKEN_SECRET_KEY=acaiapi',
  ],
};

module.exports = envBuild;
