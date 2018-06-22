import LogInterceptor from './';


describe('LogInterceptor', () => {
  let interceptor;
  let log;
  let error;
  let info;
  let warn;

  beforeEach(() => {
    log = jest.fn();
    error = jest.fn();
    info = jest.fn();
    warn = jest.fn();
    console.log = log;
    console.error = error;
    console.info = info;
    console.warn = warn;

    interceptor = new LogInterceptor();
  });

  it('should replace log function', () => {
    expect(console.log).not.toBe(log);
  });

  it('should call log function', () => {
    console.log('hello', 'world');
    expect(log).toBeCalledWith('hello', 'world');
  });

  it('should call next with arg when console.log is call', () => {
    console.log('hello', 'world');
    expect(log).toBeCalledWith('hello', 'world');
  });

  it('should getInstance return same instance', () => {
    const instance1 = LogInterceptor.getInstance();
    const instance2 = LogInterceptor.getInstance();
    expect(instance1).toBe(instance2);
  });
});
