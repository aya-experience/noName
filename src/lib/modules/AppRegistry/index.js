const BaseModule = require('../BaseModule');
const Response = require('../../models/Response');
const View = require('../../models/View');
const ViewContainer = require('../../models/ViewContainer');

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
