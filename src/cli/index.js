/**
 * CLI goes here
 */
const program = require('commander');
const packageInfo = require('../../package');
const startServer = require('../server/httpServer');

program
  .version(packageInfo.version)
  .description(packageInfo.description)
  .option('-p, --port [type]', 'run the app on the port [3000]', 3000)
  .parse(process.argv);

startServer(program.port);
