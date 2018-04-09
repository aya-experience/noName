class BaseModule {
  constructor(name, filters = []) {
    this.name = name;
    this.filters = filters;
  }

  mount(io) {
    this.io = io;
  }

  unmount() {
    this.io = null;
  }

  emit(data) {
    if (this.io) this.io.emit(this.name, data);
  }

  filter(data) {
    return this.filters.every(filter => filter(data));
  }

  handle(data) {
    this.emit(data);
  }
}

module.exports = BaseModule;
