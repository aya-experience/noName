const socketIo = require('./');
const MainController = require('../../lib/controllers/Main');

jest.mock('socket.io', () =>
  jest.fn(() => ({
    on: jest.fn(),
  })));

describe('Socket', () => {
  it('should create a socket socket.io with on function', () => {
    const socket = socketIo({});
    expect(socket).toHaveProperty('on');
  });

  it('should call on function ', () => {
    const socket = socketIo({});
    expect(socket.on).toBeCalledWith('connection', MainController.connectionHandler);
  });
});
