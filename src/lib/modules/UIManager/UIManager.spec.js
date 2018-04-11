import UIManager from './';

describe('RTCEventEmitter', () => {
  let instance;

  beforeEach(() => {
    instance = new UIManager();
  });

  it('should return an instance of RTCEventEmitter', () => {
    expect(instance).toBeInstanceOf(UIManager);
  });
});
