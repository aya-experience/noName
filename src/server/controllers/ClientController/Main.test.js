const ClientController = require('./');

describe('MainController', () => {
  let socket;
  let moduleController;

  beforeEach(() => {
    socket = {
      on: jest.fn(),
    };
    moduleController = {
      handle: jest.fn(),
    };
  });

  it('should return nothing whithout error', () => {
    const result = ClientController.connectHandler(socket, moduleController);
    expect(result).toBeUndefined();
  });

  it('should call on function', () => {
    ClientController.connectHandler(socket, moduleController);
    expect(socket.on).toBeCalledWith('disconnect', ClientController.disconnectionHandler);
  });

  it('should call on function', () => {
    ClientController.connectHandler(socket, moduleController);
    expect(socket.on).toBeCalledWith('bridge-data', moduleController.handle);
  });

  it('should return nothing whithout error', () => {
    const result = ClientController.disconnectionHandler(socket);
    expect(result).toBeUndefined();
  });
});
