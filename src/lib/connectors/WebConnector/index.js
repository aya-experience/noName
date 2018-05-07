import { Observable } from 'rxjs';
import io from 'socket.io-client';
import Connector from '../Connector';

export default class WebConnector extends Connector {
  constructor({ server = null }) {
    super(server, 'client');
    this.on = this.on.bind(this);
  }

  on(ev) {
    return Observable.create((observer) => {
      const onData = data => observer.next(data);
      this.io.on(ev, onData);
      this.emit(ev, 'on');
      return () => {
        this.emit(ev, 'off');
        io.off(ev, onData);
      };
    });
  }

  getConsole() {
    return this.on('console');
  }

  getViewState() {
    return this.on('ViewState');
  }
}
