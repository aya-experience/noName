const { Observable } = require('rxjs/Rx');
/* eslint-disable class-methods-use-this */
class ArraySplitterMiddleware {
  handle(observable) {
    return observable.flatMap(batch => Observable.from(batch));
  }
}
module.exports = ArraySplitterMiddleware;
