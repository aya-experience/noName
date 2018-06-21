import AppRegistry from './index';
import View from '../../models/View/index';

jest.mock('../../models/View');

describe('AppRegistry', () => {
  let instance;
  let sessionManager;

  beforeEach(() => {
    sessionManager = {
      set: jest.fn(),
    };
    instance = new AppRegistry(sessionManager);
  });

  it('should return an instance of RTCEventEmitter', () => {
    expect(instance).toBeInstanceOf(AppRegistry);
  });

  it('should return an instance of RTCEventEmitter', () => {
    const args = ['noName', { rootTag: 1 }];
    instance.runApplication(args);
    expect(View).toBeCalledWith(args[1].rootTag, args[0]);
  });

  it('should return an instance of RTCEventEmitter', () => {
    const args = ['noName', { rootTag: 1 }];
    instance.runApplication(args);
    expect(sessionManager.set).toBeCalledWith('ViewContainer', expect.any(Object));
  });
});
