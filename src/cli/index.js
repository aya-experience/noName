/**
 * CLI goes here
 */
const program = require('commander');
const packageInfo = require('../../../noName-chaos/package');
const startServer = require('../server/httpServer');

program
  .version(packageInfo.version)
  .description(packageInfo.description)
  .option('-p, --port [port number]', 'run the app on the port [port number]', 3000)
  .parse(process.argv);

startServer(program.port);
