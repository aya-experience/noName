const Response = require('../../models/Response/index');
const EmitterType = require('../../enum/EmitterType');
// Logger
class ConsoleMiddleware {
  constructor(responseDispacther) {
    this.responseDispacther = responseDispacther;
    this.log = this.log.bind(this);
  }

  handle(obs) {
    return obs.do(this.log);
  }

  log(data) {
    const response = new Response(EmitterType.Console, data);
    this.responseDispacther.handle(response);
  }
}

module.exports = ConsoleMiddleware;
