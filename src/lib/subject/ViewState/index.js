const { BehaviorSubject } = require('rxjs');
const SubjectType = require('../../enum/SubjectType');

const DEBOUNCE_TIME = 2000; // 1 second

class ViewState extends BehaviorSubject {
  constructor() {
    super(null);
    this.type = SubjectType.ViewState;
  }

  asObservable() {
    return super.asObservable().debounceTime(DEBOUNCE_TIME);
  }
}

module.exports = ViewState;
