const disconnectionHandler = () => {
  // TODO
};

const connectionHandler = (socket) => {
  // TODO
  socket.on('disconnect', disconnectionHandler);
};

module.exports = {
  connectionHandler,
  disconnectionHandler,
};
