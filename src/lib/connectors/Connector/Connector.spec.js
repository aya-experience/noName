/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import Connector from './index';

describe('Connector', () => {
  it('should have io to be set', () => {
    const connector = new Connector(null, null);
    expect(connector.io).toBeDefined();
  });

  it('should call io with server', () => {
    const server = 'http://localhost:3000';
    const connector = new Connector(server, null);
    expect(io).toBeCalledWith(server);
  });

  it('should return / + namespace when server is null', () => {
    const connector = new Connector(null, 'hello');
    expect(io).toBeCalledWith('/hello');
  });

  it('should return server + / + namespace when all param is set', () => {
    const connector = new Connector('http://localhost:3000', 'hello');
    expect(io).toBeCalledWith('http://localhost:3000/hello');
  });

  it('should call io.emits', () => {
    const connector = new Connector(null, null);
    const ev = 'HelloWorld';
    const data = { className: 'kevin' };
    connector.io.emit = jest.fn();
    connector.emit(ev, data);
    expect(connector.io.emit).toBeCalledWith(ev, data);
  });
});
