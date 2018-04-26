class BaseModule {
  /**
   * @param {SessionManager} sessionManager
   */
  constructor(sessionManager) {
    this.sessionManager = sessionManager;
  }

  /**
   * call the method with data.method, throw an error if the method doesn't exist
   * @param {object} data
   */
  handle(data) {
    const method = this[data.method];
    if (method) return method(data.args);
    throw new Error(`No existing method with the name ${data.method}`);
  }
}

module.exports = BaseModule;
