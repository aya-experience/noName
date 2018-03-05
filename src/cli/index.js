/**
 * CLI goes here
 */
const program = require('commander');
const packages = require('../../package');
const startServer = require('../server/httpServer');

program
  .version(packages.version)
  .description('An application for debug React-Native App')
  .parse(process.argv);

startServer();
