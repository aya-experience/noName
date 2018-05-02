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
    this.handleDataLine = this.handleDataLine.bind(this);
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

  handleDataLine(data) {
    try {
      const module = this.moduleContainer.get(data.module);
      this.socketServer.of('/client').emit(data.module, module.handle(data));
      data.handle = true;
    } catch (err) {
      console.error(err.message);
      data.handle = false;
    }
    this.handleMiddleware(data);
  }

  /**
   * handler for data from the bridge
   * @param {object} data
   */
  bridgeDataHandler(data) {
    if (Array.isArray(data)) data.forEach(this.handleDataLine);
    else this.handleDataLine(data);
  }

  handleMiddleware(data) {
    this.consoleMiddleware(data);
  }

  consoleMiddleware(data) {
    this.socketServer.of('/client').emit('console', data);
  }
}

module.exports = Controller;
