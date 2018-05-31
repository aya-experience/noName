const { BehaviorSubject } = require('rxjs/Rx');
const EmitterType = require('../../enum/EmitterType');

const DEBOUNCE_TIME = 2000; // 1 second

class TreeView extends BehaviorSubject {
  constructor() {
    super(null);
    this.type = EmitterType.TreeView;
  }

  asObservable() {
    return super.asObservable().debounceTime(DEBOUNCE_TIME);
  }
}

module.exports = TreeView;
