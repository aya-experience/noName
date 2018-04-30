import io from 'socket.io-client';
import { Observable } from 'rxjs';

export default class WebConnector {
  constructor({ server = null }) {
    this.io = io(server);
  }

  on(ev) {
    return Observable.create((observer) => {
      const onData = data => observer.next(data);
      this.io.on(ev, onData);
      return () => io.removeListener(ev, onData);
    });
  }
}
