class ModuleContainer {
  constructor(io, { modules = [] }) {
    this.io = io;
    this.handle = this.handle.bind(this);
    this.registeredModule = modules;
    this.activatedModule = [];
  }

  activate(name) {
    const module = this.registeredModule.find(item => item.name === name);
    if (module) {
      module.mount(this.io);
      this.activatedModule = [...this.activatedModule, module];
      return console.log('@ModuleContainer.activate : ', name);
    }
    return console.error('@ModuleContainer.activate > ', name, ' < Module not found');
  }

  desactivate(name) {
    const module = this.activatedModule.find(item => item.name === name);
    if (module) {
      module.unmount();
      this.activatedModule.splice(this.activatedModule.indexOf(module), 1);
      return console.log('@ModuleContainer.desactivate : ', name);
    }
    return console.error('@ModuleContainer.desactivate - no module activated', name);
  }

  handle(data) {
    console.log('@ModuleContainer.handle');
    this.activatedModule
      .filter(module => module.filter(data))
      .forEach(module => module.handle(data));
  }
}

module.exports = ModuleContainer;
