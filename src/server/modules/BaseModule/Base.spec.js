import BaseModule from '../Base';

describe('BaseModule', () => {
  let baseModule;
  let filterFunc;
  let io;

  beforeEach(() => {
    io = { emit: jest.fn() };
    filterFunc = jest.fn(() => true);
    baseModule = new BaseModule('Carapuce', [filterFunc, filterFunc, filterFunc]);
  });

  it('should have Carapuce as name attribut', () => {
    expect(baseModule.name).toBe('Carapuce');
  });

  it('should set io as attribut when mount is called', () => {
    baseModule.mount(io);
    expect(baseModule.io).toBe(io);
  });

  it('should set io as undefined by default', () => {
    expect(baseModule.io).toBe(undefined);
  });

  it('should set io as null when unmount is called', () => {
    baseModule.mount(io);
    baseModule.unmount();
    expect(baseModule.io).toBe(null);
  });

  it('should trigger io.emit when the module is mounted', () => {
    baseModule.mount(io);
    const data = {};
    baseModule.emit(data);
    expect(io.emit).toBeCalledWith('Carapuce', data);
  });

  it('should trigger not io.emit when the module is not mounted', () => {
    const data = {};
    baseModule.emit(data);
    expect(io.emit).not.toBeCalled();
  });

  it('should call all filters when filter methods is call', () => {
    baseModule.filter({});
    expect(filterFunc).toHaveBeenCalledTimes(3);
  });

  it('should call all filters when filter methods is call', () => {
    const data = {};
    baseModule.filter(data);
    expect(filterFunc).toHaveBeenCalledWith(data);
  });

  it('should be truthy when all filters is ok', () => {
    expect(baseModule.filter({})).toBeTruthy();
  });

  it('should be falsy when one filter is not ok', () => {
    filterFunc.mockImplementationOnce(() => false);
    expect(baseModule.filter({})).toBeFalsy();
  });

  it('should stop when a filter is falsy', () => {
    filterFunc.mockImplementationOnce(() => false);
    baseModule.filter({});
    expect(filterFunc).toHaveBeenCalledTimes(1);
  });

  it('should call this.emit when handle is call', () => {
    baseModule.emit = jest.fn();
    const data = {};
    baseModule.handle(data);
    expect(baseModule.emit).toBeCalledWith(data);
  });
});
