import io from 'socket.io-client';

const buildEndPointUrl = (server, namespace) =>
  (server || '') + ((namespace && `/${namespace}`) || '') || null;

class Connector {
  constructor(server, namespace) {
    const url = buildEndPointUrl(server, namespace);
    this.io = io(url);
    this.emit = this.emit.bind(this);
  }

  emit(eventName, data) {
    this.io.emit(eventName, data);
  }
}

export { Connector as default, buildEndPointUrl };
