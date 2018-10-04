const fs = require('fs');
const { each }= require('lodash');

const envVariables = require('../config/.env-template.js');

const createENVFile = ( directory, variables ) => {
  each( variables, ( variable ) => {
    fs.appendFileSync( `./${directory}/.env`, `${variable}\n` )
  });
};

const buildEnv = () => {
  each( envVariables, ( server, key ) => {
    fs.writeFileSync( `./${key}/.env`, '' );
    createENVFile( key, server );
  });
}

buildEnv();