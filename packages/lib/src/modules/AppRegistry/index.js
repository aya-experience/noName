const BaseModule = require('../BaseModule/index');
const Response = require('../../models/Response/index');
const View = require('../../models/View/index');
const ViewContainer = require('../../models/ViewContainer/index');

class AppRegistry extends BaseModule {
  constructor(sessionManager) {
    super(sessionManager);
    this.runApplication = this.runApplication.bind(this);
  }

  runApplication(args) {
    const root = new View(args[1].rootTag, args[0]);
    const viewContainer = new ViewContainer(root);
    this.sessionManager.set('ViewContainer', viewContainer);
    return new Response('TreeView', viewContainer);
  }
}

module.exports = AppRegistry;
