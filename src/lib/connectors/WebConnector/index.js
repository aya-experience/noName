import io from 'socket.io-client';
import Connector from '../Connector';

export default class WebConnector extends Connector {
  constructor({ server = null }) {
    super(server, 'client');
  }

  getConsole() {
    return this.on('console');
  }

  getViewState() {
    return this.on('view-state');
  }
}
