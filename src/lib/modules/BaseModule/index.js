class BaseModule {
  /**
   * call the method with data.method, throw an error if the method doesn't exist
   * @param {object} data
   */
  handle(data) {
    const method = this[data.method];
    if (method) return method(data.args);
    throw new Error(`No method exist with the name ${data.method}`);
  }
}

module.exports = BaseModule;
