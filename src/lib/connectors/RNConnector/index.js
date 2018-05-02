import io from 'socket.io-client';
import Snoopy from 'rn-snoopy';
import buffer from 'rn-snoopy/stream/buffer';
/* eslint-disable import/no-unresolved, import/extensions */
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';
import Connector from '../Connector';

const acceptedModule = ['Networking', 'RTCEventEmitter', 'AppRegistry', 'UIManager'];

const filter = events => events.filter(info => acceptedModule.includes(info.module));

class RNConnector extends Connector {
  constructor({ server, eventName = 'bridge-data' }) {
    super(server, 'source');
    this.eventName = eventName;
    this.onData = this.onData.bind(this);
  }

  static stream(config) {
    const connector = new RNConnector(config);
    const emitter = new EventEmitter();
    const events = Snoopy.stream(emitter);
    return buffer()(filter(events)).subscribe(connector.onData);
  }

  onData(data) {
    super.emit(this.eventName, data);
  }
}

export default RNConnector;
