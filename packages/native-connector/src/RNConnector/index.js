/* eslint-disable import/no-unresolved, import/extensions */
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { merge, filter } from 'rxjs/operators';
// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';
import Snoopy from 'rn-snoopy';
import Connector from 'rn-noname-connector/dist/Connector';
import { activatedModule } from '../constants.json';
import LogInterceptor from '../LogInterceptor';


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
    const logInterceptor = LogInterceptor.getInstance();
    // merge(logInterceptor.asObservable())
    const obs = Snoopy.stream(emitter);
    console.log('obs',obs);
    return RNConnector.filter(obs).bufferTime(1000).subscribe(connector.onData);
  }

  onData(data) {
    this.emit(this.eventName, data);
  }
}

export default RNConnector;
