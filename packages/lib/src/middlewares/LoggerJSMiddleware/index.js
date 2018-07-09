const Response = require('../../models/Response/index');
const EmitterType = require('../../enum/EmitterType.json');

class LoggerJsMiddleware {
  constructor(responseDispacther) {
    this.responseDispacther = responseDispacther;
    this.log = this.log.bind(this);
  }

  handle(obs) {
    return obs.do(this.log).filter(LoggerJsMiddleware.filter);
  }

  static filter(data) {
    return !(data.type === 10);
  }

  log(data) {
    if (data.type === 10) {
      const response = new Response(EmitterType.LoggerJS, data);
      this.responseDispacther.handle(response);
    }
  }
}

module.exports = LoggerJsMiddleware;
