const { ReplaySubject } = require('rxjs/Rx');
const EmitterType = require('../../enum/EmitterType');

class ErrorEmitter extends ReplaySubject {
  constructor() {
    super(50);
    this.type = EmitterType.Error;
  }

  /**
   * @returns {Observable<T>}
   */
  asObservable() {
    return super.asObservable();
  }
}

module.exports = ErrorEmitter;
