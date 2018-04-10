class ModuleContainer {
  constructor(io, { modules = [] }) {
    this.io = io;
    this.handle = this.handle.bind(this);
    this.registeredModule = modules;
  }

  handle(data) {
    console.log('@ModuleContainer.handle');
    this.registeredModule
      .filter(module => module.filter(data))
      .forEach(module => module.handle(data));
  }
}

module.exports = ModuleContainer;
