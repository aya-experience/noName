class BaseModule {
  handle(data) {
    const method = this[data.method];
    if (method) return method(data.args);
    throw new Error(`No method exist with the name ${data.method}`);
  }
}

module.exports = BaseModule;
