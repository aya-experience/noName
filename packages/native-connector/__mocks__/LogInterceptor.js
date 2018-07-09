const instance = {
  asObservable: jest.fn(),
  clear: () => {
    instance.asObservable.mockClear();
  },
};

const LogInterceptor = {
  getInstance: jest.fn().mockReturnValue(instance),
  clear: () => {
    LogInterceptor.getInstance.mockClear();
    instance.clear();
  },
};

export default LogInterceptor;
