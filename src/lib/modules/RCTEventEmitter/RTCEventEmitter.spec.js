import RTCEventEmitter from './';

describe('RTCEventEmitter', () => {
  let instance;

  beforeEach(() => {
    instance = new RTCEventEmitter();
  });

  it('should return an instance of RTCEventEmitter', () => {
    expect(instance).toBeInstanceOf(RTCEventEmitter);
  });
});
