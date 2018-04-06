/* eslint-disable no-console */
const socketIo = require('socket.io');
const MainController = require('../../lib/controllers/Main');

module.exports = (server) => {
  const io = socketIo(server);
  console.log('> Socket server started');
  io.on('connection', MainController.connectionHandler);
  return io;
};
