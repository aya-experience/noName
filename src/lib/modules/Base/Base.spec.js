import BaseModule from '../Base';

describe('BaseModule', () => {
  let module;
  let filterFunc;
  let io;
  beforeEach(() => {
    io = { emit: jest.fn() };
    filterFunc = jest.fn(() => true);
    module = new BaseModule('Carapuce', [filterFunc, filterFunc, filterFunc]);
  });

  it('should have Carapuce as name attribut', () => {
    expect(module.name).toBe('Carapuce');
  });

  it('should set io as attribut when mount is called', () => {
    module.mount(io);
    expect(module.io).toBe(io);
  });

  it('should set io as undefined by default', () => {
    expect(module.io).toBe(undefined);
  });

  it('should set io as null when unmount is called', () => {
    module.mount(io);
    module.unmount();
    expect(module.io).toBe(null);
  });

  it('should trigger io.emit when the module is mounted', () => {
    module.mount(io);
    const data = {};
    module.emit(data);
    expect(io.emit).toBeCalledWith('Carapuce', data);
  });

  it('should trigger not io.emit when the module is not mounted', () => {
    const data = {};
    module.emit(data);
    expect(io.emit).not.toBeCalled();
  });

  it('should call all filters when filter methods is call', () => {
    module.filter({});
    expect(filterFunc).toHaveBeenCalledTimes(3);
  });

  it('should call all filters when filter methods is call', () => {
    const data = {};
    module.filter(data);
    expect(filterFunc).toHaveBeenCalledWith(data);
  });

  it('should be truthy when all filters is ok', () => {
    expect(module.filter({})).toBeTruthy();
  });

  it('should be falsy when one filter is not ok', () => {
    filterFunc.mockImplementationOnce(() => false);
    expect(module.filter({})).toBeFalsy();
  });

  it('should stop when a filter is falsy', () => {
    filterFunc.mockImplementationOnce(() => false);
    module.filter({});
    expect(filterFunc).toHaveBeenCalledTimes(1);
  });

  it('should call this.emit when handle is call', () => {
    module.emit = jest.fn();
    const data = {};
    module.handle(data);
    expect(module.emit).toBeCalledWith(data);
  });
});
