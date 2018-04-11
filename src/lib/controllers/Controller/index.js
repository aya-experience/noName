class Controller {
  /**
   * Create a controller instance
   * @param {SocketServer} socketServer
   * @param {ModuleContainer} moduleContainer
   */
  constructor(socketServer, moduleContainer) {
    this.socketServer = socketServer;
    this.moduleContainer = moduleContainer;
    this.bridgeDataHandler = this.bridgeDataHandler.bind(this);
    this.connectHandler = this.connectHandler.bind(this);
    this.disconnectHandler = this.disconnectHandler.bind(this);
  }

  /**
   * handler for disconnected user event
   */
  disconnectHandler() {
    console.log('Client close');
  }

  /**
   * handler for connected user event
   * @param {Socket} socket
   */
  connectHandler(socket) {
    console.log('Client open');
    socket.on('bridge-data', this.bridgeDataHandler);
    socket.on('disconnect', this.disconnectHandler);
  }

  /**
   * handler for data from the bridge
   * @param {object} data
   */
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
