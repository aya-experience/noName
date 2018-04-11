const UIManager = require('../UIManager');
const RCTEventEmitter = require('../RCTEventEmitter');

class ModuleContainer {
  constructor() {
    this.registeredModule = {
      UIManager,
      RCTEventEmitter,
    };
  }

  /**
   * return a module
   * @param {string} name
   */
  get(name) {
    const ModuleClass = this.registeredModule[name];
    if (ModuleClass) return new ModuleClass();
    throw new Error(`No module exist with the name ${name}`);
  }
}

module.exports = ModuleContainer;
