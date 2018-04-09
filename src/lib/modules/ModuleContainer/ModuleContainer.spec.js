import ModuleContainer from './';

describe('', () => {
  let moduleContainer;
  let module;
  let io;
  beforeEach(() => {
    module = {
      name: 'Salameche',
      filter: jest.fn(() => true),
      handle: jest.fn(),
      mount: jest.fn(),
      unmount: jest.fn(),
    };
    io = {
      emit: jest.fn(),
    };
    moduleContainer = new ModuleContainer(io, { modules: [module] });
  });

  it('should have by default an empty array of activated module', () => {
    expect(moduleContainer.activatedModule).toEqual([]);
  });

  it('should have an array with all register module', () => {
    expect(moduleContainer.registeredModule).toEqual([module]);
  });

  it('should have an activated module when activate is call', () => {
    moduleContainer.activate(module.name);
    expect(moduleContainer.activatedModule).toEqual([module]);
  });

  it('should not throw error when activate is call with the name of unknown module', () => {
    moduleContainer.activate('chewbacca');
    expect(moduleContainer.activatedModule).toEqual([]);
  });

  it('should mount the module when activate is call', () => {
    moduleContainer.activate(module.name);
    expect(module.mount).toBeCalledWith(io);
  });

  it('should have removed the module when desactivate is call', () => {
    moduleContainer.activate(module.name);
    moduleContainer.desactivate(module.name);
    expect(moduleContainer.activatedModule).toEqual([]);
  });

  it('should not throw error when desactivate is call with the name of non activated module', () => {
    moduleContainer.desactivate(module.name);
    expect(moduleContainer.activatedModule).toEqual([]);
  });

  it('should have unmount the module when desactivate is call', () => {
    moduleContainer.activate(module.name);
    moduleContainer.desactivate(module.name);
    expect(module.unmount).toBeCalled();
  });

  it('should call filter method of activated module when handle is call', () => {
    moduleContainer.activate(module.name);
    const data = {};
    moduleContainer.handle(data);
    expect(module.filter).toBeCalledWith(data);
  });

  it('should call handle method of module when filter return true', () => {
    moduleContainer.activate(module.name);
    const data = {};
    moduleContainer.handle(data);
    expect(module.handle).toBeCalledWith(data);
  });

  it('should not call handle method of module when filter return false', () => {
    moduleContainer.activate(module.name);
    module.filter.mockImplementationOnce(() => false);
    moduleContainer.handle({});
    expect(module.handle).not.toBeCalled();
  });
});
