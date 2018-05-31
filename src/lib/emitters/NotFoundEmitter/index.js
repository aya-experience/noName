const EmitterType = require('../../enum/EmitterType');
const ErrorEmitter = require('../ErrorEmitter');

class NotFoundEmitter extends ErrorEmitter {
  constructor() {
    super();
    this.type = EmitterType.NotFound;
  }
}

module.exports = NotFoundEmitter;
