import BaseModule from './index';

describe('BaseModule', () => {
  let baseModule;

  beforeEach(() => {
    baseModule = new BaseModule();
  });

  it('should call the method of name data.method when handle is call', () => {
    const data = { method: 'testMethod', args: ['Hello', 'World'] };
    baseModule[data.method] = jest.fn(args => args);
    baseModule.handle(data);
    expect(baseModule.testMethod).toBeCalledWith(data.args);
  });

  it('should return the result of the data.method when handle is call', () => {
    const data = { method: 'testMethod', args: ['Hello', 'World'] };
    baseModule[data.method] = jest.fn(args => args);
    expect(baseModule.handle(data)).toBe(data.args);
  });

  it('should thow an error when unknow method is given', () => {
    const data = { method: 'unknowMethod', args: ['Hello', 'World'] };
    expect(() => {
      baseModule.handle(data);
    }).toThrowError();
  });
});
