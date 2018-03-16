/* eslint-disable no-console */
const socketIo = require('socket.io');

const socketServer = (server) => {
  const io = socketIo(server);
  console.log('> Socket server started');
  io.on('connection', (socket) => {
    console.log('> Socket.connection', `${socket.id} has just connected`);
    // Add handler
    socket.on('disconnect', () => {
      console.log('> Socket.disconnect', `${socket.id} has just disconnected`);
    });
  });
  return io;
};

module.exports = socketServer;
