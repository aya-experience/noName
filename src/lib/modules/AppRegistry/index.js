const BaseModule = require('../BaseModule');
const View = require('../../models/View');
const ViewContainer = require('../../models/ViewContainer');

class AppRegistry extends BaseModule {
  constructor(sessionManager) {
    super(sessionManager);
    this.runApplication = this.runApplication.bind(this);
  }

  runApplication(args) {
    const root = new View(args[1].rootTag, args[0]);
    this.sessionManager.set('ViewContainer', new ViewContainer(root));
  }
}

module.exports = AppRegistry;
