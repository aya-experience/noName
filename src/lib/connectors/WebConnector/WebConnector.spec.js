import { Observable } from 'rxjs';
import WebConnector from './index';

describe('WebConnector', () => {
  let connector;
  let config;

  beforeEach(() => {
    config = { server: 'http://localhost:3000' };
    connector = new WebConnector(config);
  });

  it('should have io object', () => {
    expect(connector.io).not.toBeUndefined();
  });

  it('should have io object when no server adress is set', () => {
    connector = new WebConnector({});
    expect(connector.io).not.toBeUndefined();
  });

  it('should return an observable when on is called', () => {
    const observable = connector.on('event');
    expect(observable).toBeInstanceOf(Observable);
  });

  it('should call io.on when on is called', () => {
    connector.io.on = jest.fn();
    connector.on('event').subscribe();
    expect(connector.io.on).toBeCalled();
  });

  it('should receive all even on subscription func', () => {
    const subscribtion = jest.fn();
    const data = { module: 'UIManager' };
    connector.io.on = jest.fn();
    connector.on('event').subscribe(subscribtion);
    connector.io.on.mock.calls[0][1](data);
    expect(subscribtion).toBeCalledWith(data);
  });

  it('should shut down connection on unsubscribe', () => {
    connector.emit = jest.fn();
    connector.io.off = jest.fn();
    connector.on('event').subscribe().unsubscribe();
    expect(connector.emit).toBeCalledWith('event', 'off');
  });

  it('should remove eventEmitter of connection on unsubscribe', () => {
    connector.emit = jest.fn();
    connector.io.off = jest.fn();
    connector.on('event').subscribe().unsubscribe();
    expect(connector.io.off).toBeCalledWith('event', expect.any(Function));
  });

  it('should return an obs when getConsole is call', () => {
    connector.on = jest.fn(() => 'observable');
    expect(connector.getConsole()).toBe('observable');
  });

  it('should return an obs when getTreeView is call', () => {
    connector.on = jest.fn(() => 'observable');
    expect(connector.getTreeView()).toBe('observable');
  });
});
