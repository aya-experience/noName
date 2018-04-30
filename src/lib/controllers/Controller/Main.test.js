const Controller = require('./');

describe('Controller', () => {
  let moduleContainer;
  let socketServer;
  let controller;
  let moduleInstance;

  beforeEach(() => {
    moduleInstance = { handle: jest.fn() };
    socketServer = {
      emit: jest.fn(),
    };
    moduleContainer = {
      get: jest.fn(() => moduleInstance),
    };
    controller = new Controller(socketServer, moduleContainer);
  });

  it('should have io instance when created', () => {
    expect(controller.socketServer).toBe(socketServer);
  });

  it('should have moduleContainer instance when created', () => {
    expect(controller.moduleContainer).toBe(moduleContainer);
  });

  it('should call socket.on with bridge-data event and bridgeDataHandler', () => {
    const socket = {
      on: jest.fn(),
    };
    controller.connectHandler(socket);
    expect(socket.on).toBeCalledWith('bridge-data', controller.bridgeDataHandler);
  });

  it('should call socket.on with disconnect event and bridgeDataHandler', () => {
    const socket = {
      on: jest.fn(),
    };
    controller.connectHandler(socket);
    expect(socket.on).toBeCalledWith('disconnect', controller.disconnectHandler);
  });

  it('should call do nothing without error', () => {
    expect(() => {
      controller.disconnectHandler();
    }).not.toThrow();
  });

  it('should call moduleContainer.get with data.module', () => {
    const data = { module: 'Hello', method: 'World' };
    controller.bridgeDataHandler(data);
    expect(moduleContainer.get).toBeCalledWith(data.module);
  });

  it('should call module.handle whit data', () => {
    const data = { module: 'Hello', method: 'World' };
    controller.bridgeDataHandler(data);
    expect(moduleInstance.handle).toBeCalledWith(data);
  });

  it('should call socketService.emit with data.module and module.handle result', () => {
    const data = { module: 'Hello', method: 'World' };
    moduleInstance.handle.mockImplementationOnce(() => 'test');
    controller.bridgeDataHandler(data);
    expect(socketServer.emit).toBeCalledWith(data.module, 'test');
  });

  it('should call socketService.emit with data.module and module.handle result', () => {
    const data = { module: 'Hello', method: 'World' };
    moduleInstance.handle.mockImplementationOnce(() => {
      throw new Error();
    });
    controller.bridgeDataHandler(data);
    expect(socketServer.emit).toBeCalledWith('console', data);
  });
});
