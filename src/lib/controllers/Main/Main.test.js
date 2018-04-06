const MainController = require('./');

describe('MainController', () => {
  let socket;

  beforeEach(() => {
    socket = {
      on: jest.fn(),
    };
  });

  it('should return nothing whithout error', () => {
    const result = MainController.connectionHandler(socket);
    expect(result).toBeUndefined();
  });

  it('should call on function', () => {
    MainController.connectionHandler(socket);
    expect(socket.on).toBeCalledWith('disconnect', MainController.disconnectionHandler);
  });

  it('should return nothing whithout error', () => {
    const result = MainController.disconnectionHandler(socket);
    expect(result).toBeUndefined();
  });
});
