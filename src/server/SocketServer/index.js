const socketIo = require('socket.io');

/**
 * Abstract Api of socket.io lib
 */
class SocketServer {
  /**
   * Create a websocket whith an instant of http server
   * @param {httpServer} httpServer
   */
  constructor(httpServer) {
    this.io = socketIo(httpServer);
  }

  /**
   * Call handler function when a new client is connected
   * @param {Function} handler
   */
  connect(handler) {
    this.io.on('connection', handler);
  }

  /**
   * Call handler function when a client is disconnected
   * @param {Function} handler
   */
  disconnect(handler) {
    this.io.on('disconnect', handler);
  }

  /**
   * Emit to all socket an event
   * @param {string} event
   * @param {object} data
   */
  emit(event, data) {
    this.io.emit(event, data);
  }

  /**
   * Call handler function when a new client is connected
   * @param {Function} handler
   */
  on(event, handler) {
    this.io.on(event, handler);
  }
}

module.exports = SocketServer;
