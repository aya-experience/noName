const IO = require('socket.io');
const { Observable } = require('rxjs');
const Socket = require('./Socket/index');

/**
 * Abstract Api of SocketServer in socket.io lib
 */
class SocketServer {
  /**
   * Create a websocket with an instant of http server
   * @param {httpServer} httpServer
   */
  constructor(httpServer) {
    this.io = IO(httpServer, {
      serveClient: false,
    });
  }

  /**
   * Call handler function when a new client is connected
   * @param {string} namespaceValue default '/'
   * @returns Observable
   */
  connect(namespaceValue = '/') {
    return Observable.create((observer) => {
      // create a namespace to limit the emit impact
      const namespace = this.io.of(namespaceValue);
      // Handle connect and disconnect
      const handlerConnect = socketIo => observer.next(new Socket(socketIo));
      namespace.on('connect', handlerConnect);
      // Handle unsubscribe remove listener
      return () => {
        namespace.removeListener('connect', handlerConnect);
      };
    });
  }

  /**
   * Emit to all socket an event
   * @param {string} ev
   * @param {object} data
   */
  emit(ev, data, namespace) {
    (namespace ? this.io.of(namespace) : this.io).emit(ev, data);
  }
}

module.exports = SocketServer;
