const SocketServer = require('./');

jest.mock('socket.io', () =>
  jest.fn(() => ({
    on: jest.fn(),
    emit: jest.fn(),
  })));

describe('SocketServer', () => {
  let socketServer;
  beforeEach(() => {
    socketServer = new SocketServer({});
  });

  it('should create a socket socket.io with on function', () => {
    expect(socketServer.io).toHaveProperty('on');
  });

  it('should call io.conntect with "connect" and a handler func', () => {
    const handler = jest.fn();
    socketServer.connect(handler);
    expect(socketServer.io.on).toBeCalledWith('connection', handler);
  });

  it('should call io.on with "connect" and a handler func', () => {
    const handler = jest.fn();
    socketServer.disconnect(handler);
    expect(socketServer.io.on).toBeCalledWith('disconnect', handler);
  });

  it('should call io.on with "connect" and a handler func', () => {
    const handler = jest.fn();
    socketServer.on('event', handler);
    expect(socketServer.io.on).toBeCalledWith('event', handler);
  });

  it('should call io.on with "disconnect" and a handler func', () => {
    const handler = jest.fn();
    socketServer.disconnect(handler);
    expect(socketServer.io.on).toBeCalledWith('disconnect', handler);
  });

  it('should call io.emit with an event and a data', () => {
    socketServer.emit('event', {});
    expect(socketServer.io.emit).toBeCalledWith('event', {});
  });
});
