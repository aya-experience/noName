/* eslint-disable class-methods-use-this */
const RULES = [
  data =>
    !(
      data.module === 'Networking' && data.args[1].includes('http://192.168.1.149:3000/socket.io/')
    ),
];

class ArraySplitterMiddleware {
  static check(data) { return RULES.every(rule => rule(data)); }
  handle(observable) {
    return observable.filter(ArraySplitterMiddleware.check);
  }
}
module.exports = ArraySplitterMiddleware;
module.exports.rules = RULES;
