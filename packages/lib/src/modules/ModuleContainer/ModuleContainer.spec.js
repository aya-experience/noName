import ModuleContainer from './index';
import UIManager from '../UIManager/index';

jest.mock('../RCTEventEmitter');
jest.mock('../UIManager');

describe('ModuleContainer', () => {
  let moduleContainer;

  beforeEach(() => {
    moduleContainer = new ModuleContainer();
  });

  it('should return an instance of the name when get is call', () => {
    expect(moduleContainer.get('UIManager')).toBeInstanceOf(UIManager);
  });

  it('should thow an error when unknow name module is given', () => {
    expect(() => {
      moduleContainer.get('unknowModule');
    }).toThrowError();
  });
});
