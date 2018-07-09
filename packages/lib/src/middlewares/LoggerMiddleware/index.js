const Response = require('../../models/Response/index');
const EmitterType = require('../../enum/EmitterType.json');

class LoggerMiddleware {
  constructor(responseDispacther) {
    this.responseDispacther = responseDispacther;
    this.log = this.log.bind(this);
  }

  handle(obs) {
    return obs.do(this.log);
  }

  log(data) {
    const response = new Response(EmitterType.Logger, data);
    this.responseDispacther.handle(response);
  }
}

module.exports = LoggerMiddleware;
