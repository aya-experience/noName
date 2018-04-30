import io from 'socket.io-client';
import Snoopy from 'rn-snoopy';
import buffer from 'rn-snoopy/stream/buffer';
// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

class RNConnector {
  constructor({ server, eventName = 'bridge-data' }) {
    this.socket = io(server);
    this.eventName = eventName;
  }

  stream() {
    const emitter = new EventEmitter();
    const events = Snoopy.stream(emitter);
    return this._buffer(events).subscribe(this._onData);
  }

  _buffer = events => buffer()(events);

  _onData = (data) => {
    this.socket.emit(this.eventName, data);
  };
}

export default RNConnector;
