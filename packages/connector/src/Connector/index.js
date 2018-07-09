import io from 'socket.io-client';


class Connector {
  static buildEndPointUrl(server, namespace) {
    return (server || '') + ((namespace && `/${namespace}`) || '') || null;
  }

  emit(ev, data) {
    this.io.emit(ev, data);
  }

  constructor(server, namespace) {
    const url = Connector.buildEndPointUrl(server, namespace);
    this.io = io(url);
    this.emit = this.emit.bind(this);
  }
}

export default Connector;
