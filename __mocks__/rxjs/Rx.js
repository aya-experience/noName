const subscription = {
  unsubscribe: jest.fn(),
  clear: () => {
    subscription.unsubscribe.mockClear();
  },
};

const instance = {
  map: jest.fn().mockReturnThis(),
  flatMap: jest.fn().mockReturnThis(),
  let: jest.fn().mockReturnThis(),
  do: jest.fn().mockReturnThis(),
  filter: jest.fn().mockReturnThis(),
  debounceTime: jest.fn().mockReturnThis(),
  bufferTime: jest.fn().mockReturnThis(),
  subscribe: jest.fn().mockReturnValue(subscription),
  clear: () => {
    instance.map.mockClear();
    instance.flatMap.mockClear();
    instance.let.mockClear();
    instance.do.mockClear();
    instance.filter.mockClear();
    instance.debounceTime.mockClear();
    instance.bufferTime.mockClear();
    instance.subscribe.mockClear();
  },
};

const Observable = {
  create: jest.fn().mockReturnValue(instance),
  from: jest.fn().mockReturnValue(instance),
  instance,
  subscription,
  clear: () => {
    Observable.create.mockClear();
    Observable.from.mockClear();
    instance.clear();
    subscription.clear();
  },
};

class Subject {
  // eslint-disable-next-line class-methods-use-this
  asObservable() {
    return instance;
  }
}

module.exports.Observable = Observable;
module.exports.Subject = Subject;
module.exports.ReplaySubject = Subject;
module.exports.BehaviorSubject = Subject;
