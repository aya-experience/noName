import MiddlewareContainer from './index';

describe('MiddlewareContainer', () => {
  let middlewareContainer;
  let middlewares;
  let responseDispatcher;

  beforeEach(() => {
    responseDispatcher = { handle: jest.fn() };
    const transform = value => value + 1;
    middlewares = [
      { handle: jest.fn(transform) },
      { handle: jest.fn(transform) },
      { handle: jest.fn(transform) },
      { handle: jest.fn(transform) },
    ];
    middlewareContainer = new MiddlewareContainer(responseDispatcher, middlewares);
  });

  it('should have a list of middleware when created', () => {
    expect(middlewareContainer).toMatchObject({ middlewares });
  });

  it('should call the first middleware whit 0', () => {
    middlewareContainer.handle(0);
    expect(middlewares[0].handle).toBeCalledWith(0);
  });

  it('should call the last middleware with the last tranformed value', () => {
    middlewareContainer.handle(0);
    expect(middlewares[3].handle).toBeCalledWith(3);
  });

  it('should last tranformed value', () => {
    expect(middlewareContainer.handle(0)).toBe(4);
  });

  it('should by default have 3 middleware', () => {
    const container = new MiddlewareContainer();
    expect(container.middlewares).toHaveLength(3);
  });
});
