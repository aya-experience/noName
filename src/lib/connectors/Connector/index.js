import io from 'socket.io-client';
import { Observable } from 'rxjs';

const buildEndPointUrl = (server, namespace) =>
  (server || '') + ((namespace && `/${namespace}`) || '') || null;

class Connector {
  constructor(server, namespace) {
    this.io = io(buildEndPointUrl(server, namespace));
    this.on = this.on.bind(this);
    this.emit = this.emit.bind(this);
  }

  on(ev) {
    return Observable.create((observer) => {
      const onData = data => observer.next(data);
      this.io.on(ev, onData);
      return () => io.removeListener(ev, onData);
    });
  }

  emit(eventName, data) {
    this.io.emit(eventName, data);
  }
}

export { Connector as default, buildEndPointUrl };
