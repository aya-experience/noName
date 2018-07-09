const { socketUrlFilter } = require('../../utils/filters');

const RULES = [
  data =>
    !(
      data.module === 'Networking' && socketUrlFilter(data.args[1])
    ),
];

class PurifyMiddleware {
  static check(data) { return RULES.every(rule => rule(data)); }

  /* eslint-disable class-methods-use-this */
  handle(observable) {
    return observable.filter(PurifyMiddleware.check);
  }
}
module.exports = PurifyMiddleware;
module.exports.rules = RULES;
