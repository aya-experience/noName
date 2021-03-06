const ArraySplitterMiddleware = require('../ArraySplitterMiddleware/');
const LoggerMiddleware = require('../LoggerMiddleware/');
const LoggerJSMiddleware = require('../LoggerJSMiddleware/');
const PurifyMiddleware = require('../PurifyMiddleware/');

const MIDDLEWARE = [ArraySplitterMiddleware, PurifyMiddleware, LoggerJSMiddleware, LoggerMiddleware];

class MiddlewareContainer {
  static middlewareGenerator(middlewares, responseDispacther) {
    return middlewares.map(Middleware => new Middleware(responseDispacther));
  }

  /**
   * @param {EmitterContainer} responseDispacther
   * |-> All object with a method handle is Ok
   * @param {Array<Class>} middlewares
   */
  constructor(responseDispacther, middlewares = null) {
    this.middlewares = middlewares
      || MiddlewareContainer.middlewareGenerator(MIDDLEWARE, responseDispacther);
    this.handle = this.handle.bind(this);
  }

  /**
   * Execute all middleware on the input observable
   * @param {Observable} observable
   * @returns {Observable}
   */
  handle(observable) {
    return this.middlewares.reduce((obs, middleware) => middleware.handle(obs), observable);
  }
}

module.exports = MiddlewareContainer;
