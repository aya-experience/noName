class ClientController {
  static disconnectionHandler() {
    console.log('Client close');
    // TODO
  }

  static connectHandler(socket, moduleContainer) {
    console.log('Client open');
    socket.on('bridge-data', moduleContainer.handle);
    socket.on('disconnect', this.disconnectionHandler);
  }
}

module.exports = ClientController;
