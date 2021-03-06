/* eslint-disable import/no-unresolved, import/extensions */
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import { filter, bufferTime } from 'rxjs/operators';
// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';
import Snoopy from 'rn-snoopy';
import Connector from '@rn-debugger/connector/dist/Connector';
import { merge } from 'rxjs';
import { bannedModule } from '../constants.json';
import LogInterceptor from '../LogInterceptor';


class RNConnector extends Connector {
  constructor({ server, eventName = 'bridge-data' }) {
    super(server, 'source');
    this.eventName = eventName;
    this.onData = this.onData.bind(this);
  }

  static onlyActivatedModule(data) {
    return !bannedModule.includes(data.module);
  }

  static stream(config) {
    const connector = new RNConnector(config);
    const emitter = new EventEmitter();
    const logInterceptor = LogInterceptor.getInstance();
    const obs = merge(
      filter(RNConnector.onlyActivatedModule)(Snoopy.stream(emitter)),
      logInterceptor.asObservable(),
    );
    return bufferTime(1000)(obs).subscribe(connector.onData);
  }

  onData(data) {
    this.emit(this.eventName, data);
  }
}

export default RNConnector;
