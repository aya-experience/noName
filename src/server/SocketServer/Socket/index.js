const { Observable } = require('rxjs');

class Socket {
  constructor(socket) {
    this.socket = socket;
  }

  get id() {
    return this.socket.id;
  }

  /**
   * Return an observable of an event emitter
   * @param {String} ev
   */
  on(ev) {
    return Observable.create((observer) => {
      const onData = data => observer.next(data);
      this.socket.on(ev, onData);
      return () => this.socket.removeListener(ev, onData);
    });
  }

  /**
   * Return an observable to watch when the socket disconnect
   */
  disconnect() {
    return this.on('disconnect');
  }

  /**
   * send a value to socket-client
   * @param {String} ev
   * @param {Object} value
   */
  emit(ev, value) {
    this.socket.emit(ev, value);
  }
}

module.exports = Socket;
