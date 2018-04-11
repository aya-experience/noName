class Controller {
  constructor(socketServer, moduleContainer) {
    this.socketServer = socketServer;
    this.moduleContainer = moduleContainer;
    this.bridgeDataHandler = this.bridgeDataHandler.bind(this);
    this.connectHandler = this.connectHandler.bind(this);
    this.disconnectHandler = this.disconnectHandler.bind(this);
  }

  disconnectHandler() {
    console.log('Client close');
  }

  connectHandler(socket) {
    console.log('Client open');
    socket.on('bridge-data', this.bridgeDataHandler);
    socket.on('disconnect', this.disconnectHandler);
  }

  bridgeDataHandler(data) {
    try {
      const module = this.moduleContainer.get(data.module);
      this.socketServer.emit(data.module, module.handle(data));
    } catch (err) {
      console.error(err.message);
      this.socketServer.emit('UnknownData', data);
    }
  }
}

module.exports = Controller;
