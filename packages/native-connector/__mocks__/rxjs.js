export const observable = {
  pipe: jest.fn().mockReturnThis(),
  subscribe: jest.fn(),
  clear: () => {
    observable.pipe.mockClear();
    observable.subscribe.mockClear();
  },
};

export class Subject {
  constructor() {
    this.next = jest.fn();
    this.asObservable = jest.fn().mockReturnValue(observable);
  }
}

export const merge = jest.fn().mockReturnValue(observable);

const rxjs = {
  Subject,
  merge,
  clear: () => {
    rxjs.merge.mockClear();
    observable.clear();
  },
};


export default rxjs;
