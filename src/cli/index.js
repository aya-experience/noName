/**
 * CLI goes here
 */
const program = require('commander');
const packages = require('../../package');

program
  .version(packages.version)
  .description('An application for debug React-Native App')
  .option('-d', '--developpment', 'Developpment mode')
  .parse(process.argv);

if (program.developpment) {
  process.env.NODE_ENV = 'developpment';
}

require('../server/httpServer');
