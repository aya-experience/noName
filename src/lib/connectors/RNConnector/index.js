import Snoopy from 'rn-snoopy';
import buffer from 'rn-snoopy/stream/buffer';
/* eslint-disable import/no-unresolved, import/extensions */
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';
import Connector from '../Connector';
import { activatedModule } from '../../constants.json';


class RNConnector extends Connector {
  constructor({ server, eventName = 'bridge-data' }) {
    super(server, 'source');
    this.eventName = eventName;
    this.onData = this.onData.bind(this);
  }

  static onlyActivatedModule(data) {
    return activatedModule.includes(data.module);
  }

  static filter(obs) {
    return obs.filter(RNConnector.onlyActivatedModule);
  }

  static stream(config) {
    const connector = new RNConnector(config);
    const emitter = new EventEmitter();
    const obs = Snoopy.stream(emitter);
    return buffer()(RNConnector.filter(obs)).subscribe(connector.onData);
  }

  onData(data) {
    this.emit(this.eventName, data);
  }
}

export default RNConnector;
