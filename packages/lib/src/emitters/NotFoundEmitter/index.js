const EmitterType = require('../../enum/EmitterType.json');
const ErrorEmitter = require('../ErrorEmitter/index');

class NotFoundEmitter extends ErrorEmitter {
  constructor() {
    super();
    this.type = EmitterType.NotFound;
  }
}

module.exports = NotFoundEmitter;
