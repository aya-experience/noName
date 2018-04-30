import socket from 'socket.io-client';
import snoopy from 'rn-snoopy';
import buffer from 'rn-snoopy/stream/buffer';
import RNConnector from './';

jest.mock('rn-snoopy');
jest.mock('socket.io-client');

describe('RNConnector', () => {
  let emit;
  let connector;

  beforeEach(() => {
    emit = jest.fn();
    socket.mockReturnValue({ emit });
    connector = new RNConnector({});
  });

  it('should call socket.io-client function', () => {
    expect(socket).toBeCalled();
  });

  it('should create a RNConnector with deault value', () => {
    expect(connector).toMatchObject({
      socket: expect.any(Object),
      eventName: 'bridge-data',
    });
  });

  it('should create a RNConnector with custom event', () => {
    const config = { eventName: 'event-hello' };
    connector = new RNConnector(config);
    expect(connector).toMatchObject({
      eventName: 'event-hello',
    });
  });

  it('should create a RNConnector', () => {
    const config = { server: 'http://localhost' };
    connector = new RNConnector(config);
    expect(socket).toBeCalledWith(config.server);
  });

  it('should create an EventEmitter when stream is call', () => {
    connector.stream();
    expect(snoopy.stream).toHaveBeenCalled();
  });

  it('should create an EventEmitter when stream is call', () => {
    connector.stream();
    expect(buffer).toHaveBeenCalled();
  });

  it('should create an EventEmitter when stream is call', () => {
    const data = {};
    connector._onData(data);
    expect(emit).toHaveBeenCalledWith(connector.eventName, data);
  });
});
