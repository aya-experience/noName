import io from 'socket.io-client';
import { Observable } from 'rxjs';

export default class WebConnector {
  constructor({ server = null }) {
    this.io = io(server);
  }

  on(ev) {
    return Observable.create(observer => this.io.on(ev, data => observer.next(data)));
  }
}
