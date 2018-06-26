import { Observable } from 'rxjs/Rx';
import Connector from '../Connector/';
import EmitterType from '../constant.json';


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
        this.io.off(ev, onData);
      };
    });
  }

  getLogger() {
    return this.on(EmitterType.Logger);
  }

  getLoggerJS() {
    return this.on(EmitterType.LoggerJS);
  }

  getTreeView() {
    return this.on(EmitterType.TreeView);
  }
}
