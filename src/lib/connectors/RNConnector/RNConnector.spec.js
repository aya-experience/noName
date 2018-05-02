import io from 'socket.io-client';
import snoopy from 'rn-snoopy';
import buffer from 'rn-snoopy/stream/buffer';
import RNConnector from './';

jest.mock('rn-snoopy');

describe('RNConnector', () => {
  it('should create a RNConnector with deault value', () => {
    const connector = new RNConnector({});
    expect(connector).toMatchObject({
      eventName: 'bridge-data',
    });
  });

  it('should create a RNConnector with custom event', () => {
    const config = { eventName: 'event-hello' };
    const connector = new RNConnector(config);
    expect(connector).toMatchObject({
      eventName: 'event-hello',
    });
  });

  it('should call snoopy stream when stream is call', () => {
    RNConnector.stream({});
    expect(snoopy.stream).toHaveBeenCalled();
  });

  it('should call buffer when stream is call', () => {
    RNConnector.stream({});
    expect(buffer).toHaveBeenCalled();
  });
});
