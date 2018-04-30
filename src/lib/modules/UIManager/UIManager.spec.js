import UIManager from './';

describe('RTCEventEmitter', () => {
  let instance;
  let sessionManager;
  let viewContainer;

  beforeEach(() => {
    viewContainer = {
      clearJSResponders: jest.fn(),
      setJsResponder: jest.fn(),
      get: jest.fn(),
      addView: jest.fn(),
    };
    sessionManager = {
      get: jest.fn(() => viewContainer),
    };
    instance = new UIManager(sessionManager);
  });

  it('should call sessionManager.get', () => {
    instance._getViewContainer();
    expect(sessionManager.get).toBeCalledWith('ViewContainer');
  });

  it('should call viewContainer.clearJSResponders', () => {
    instance.clearJSResponder();
    expect(viewContainer.clearJSResponders).toBeCalled();
  });

  it('should call viewContainer.clearJSResponders', () => {
    const args = [5, 56];
    instance.setJSResponder(args);
    expect(viewContainer.setJsResponder).toBeCalledWith(5, 56);
  });
});
