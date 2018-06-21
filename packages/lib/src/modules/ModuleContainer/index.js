const UIManager = require('../UIManager/index');
const RCTEventEmitter = require('../RCTEventEmitter/index');
const SessionManager = require('../SessionManager/index');
const AppRegistry = require('../AppRegistry/index');
const NotFoundError = require('../../errors/NotFoundError/index');

class ModuleContainer {
  constructor() {
    this.registeredModule = {
      UIManager,
      RCTEventEmitter,
      AppRegistry,
    };
    this.sessionManager = new SessionManager();
  }

  /**
   * return a module
   * @param {string} name
   */
  get(name) {
    const ModuleClass = this.registeredModule[name];
    if (ModuleClass) return new ModuleClass(this.sessionManager);
    throw new NotFoundError(`No existing module with the name ${name}`);
  }
}

module.exports = ModuleContainer;
