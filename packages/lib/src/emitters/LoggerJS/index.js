const { ReplaySubject } = require('rxjs/Rx');
const EmitterType = require('../../enum/EmitterType.json');

const TICK = 1000; // 1 second
const SIZE = 50;

class LoggerJS extends ReplaySubject {
  constructor() {
    super(SIZE);
    this.type = EmitterType.LoggerJS;
  }

  asObservable() {
    return super.asObservable().bufferTime(TICK);
  }
}

module.exports = LoggerJS;
