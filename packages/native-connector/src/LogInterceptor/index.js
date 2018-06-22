/* eslint-disable no-console */
import { Subject } from 'rxjs';

const MODULE_NAME = 'ConsoleJS';
const TYPE = 10;
const INTERCEPTED_METHOD = ['log', 'error', 'info', 'warn'];

class LogInterceptor extends Subject {
  constructor() {
    super();
    this.init();
  }

  init() {
    INTERCEPTED_METHOD.forEach((value) => {
      console[value] = this.intercept(console[value], value);
    });
  }

  static getInstance() {
    if (!LogInterceptor.instance) {
      LogInterceptor.instance = new LogInterceptor();
    }
    return LogInterceptor.instance;
  }

  intercept(originalFn, method) {
    return (...args) => {
      this.next({
        type: TYPE, module: MODULE_NAME, method, args,
      });
      return originalFn.apply(console, args);
    };
  }
}

export default LogInterceptor;
