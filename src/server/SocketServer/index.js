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
    this.io.of('/source').on('connection', handler);
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
   * @param {string} ev
   * @param {object} data
   */
  emit(ev, data, namespace) {
    (namespace ? this.io.of(namespace) : this.io).emit(ev, data);
  }

  /**
   * subscribe to an event
   * @param {string} ev
   * @param {Function} handler
   */
  on(ev, handler) {
    this.io.on(ev, handler);
  }
}

module.exports = SocketServer;
