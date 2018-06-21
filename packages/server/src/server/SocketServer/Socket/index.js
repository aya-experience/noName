const { Observable } = require('rxjs/Rx');

/**
 * Abstract Api of Socket in socket.io lib
 */
class Socket {
  constructor(socket) {
    this.socket = socket;
    this.subscriptions = {};
    this._onClose = this._onClose.bind(this);
    // remove all subscription on disconnect
    this.disconnect().subscribe(this._onClose);
  }

  /**
   * Get socket id
   * @returns {string}
   */
  get id() {
    return this.socket.id;
  }

  /**
   * remove all subscription when the socket
   */
  _onClose() {
    Object.keys(this.subscriptions)
      .map(key => this.subscriptions[key])
      .forEach(subscription => subscription.unsubscribe());
    this.subscriptions = {};
  }

  /**
   * Subscribe to a emitter and emit all data received
   * @param {Emitter} emitter
   */
  readEmitter(emitter) {
    const { type } = emitter;
    if (!this.subscriptions[type]) {
      const dataHandler = data => this.emit(type, data);
      this.subscriptions[type] = emitter.asObservable().subscribe(dataHandler);
    }
  }

  /**
   * Remove a emitter subscription
   * @param {Emitter} emitter
   */
  unreadEmitter(emitter) {
    const { type } = emitter;
    if (this.subscriptions[type]) {
      this.subscriptions[type].unsubscribe();
      delete this.subscriptions[type];
    }
  }

  /**
   * Return an observable of an event emitter
   * @param {String} ev
   * @returns {Observable}
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
   * @returns {Observable}
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
