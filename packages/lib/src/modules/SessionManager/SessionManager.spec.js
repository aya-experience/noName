import SessionManager from './index';

describe('SessionManager', () => {
  let instance;

  beforeEach(() => {
    instance = new SessionManager();
  });

  it('should add an object at the good key', () => {
    instance.set('hello', 'world');
    expect(instance.get('hello')).toBe('world');
  });

  it('should return undefined if get is call with unknow key', () => {
    expect(instance.get('unknow')).toBeUndefined();
  });
});
