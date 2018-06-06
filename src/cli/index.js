/**
 * CLI goes here
 */
const program = require('commander');
const packageInfo = require('../../package');
const startServer = require('../server/httpServer');

program
  .version(packageInfo.version)
  .description(packageInfo.description)
  .option('-p, --port [port number]', 'run the app on the port [port number]', 3000)
  .option('--np', 'don\'t open the application on navigator', false)
  .parse(process.argv);

startServer(program.port, program.np);
