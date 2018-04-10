import ModuleContainer from './';

describe('ModuleContainer', () => {
  let moduleContainer;
  let testModule;
  let io;

  beforeEach(() => {
    testModule = {
      name: 'Salameche',
      filter: jest.fn(() => true),
      handle: jest.fn(),
      mount: jest.fn(),
      unmount: jest.fn(),
    };
    io = {
      emit: jest.fn(),
    };
    moduleContainer = new ModuleContainer(io, { modules: [testModule] });
  });
  it('should have an array with all register module', () => {
    expect(moduleContainer.registeredModule).toEqual([testModule]);
  });

  it('should call filter method of activated module when handle is call', () => {
    const data = {};
    moduleContainer.handle(data);
    expect(testModule.filter).toBeCalledWith(data);
  });

  it('should call handle method of module when filter return true', () => {
    const data = {};
    moduleContainer.handle(data);
    expect(testModule.handle).toBeCalledWith(data);
  });

  it('should not call handle method of module when filter return false', () => {
    testModule.filter.mockImplementationOnce(() => false);
    moduleContainer.handle({});
    expect(testModule.handle).not.toBeCalled();
  });
});
