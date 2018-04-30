import { Observable } from 'rxjs';
import WebConnector from './';

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

  it('should call io.on when on is called', () => {
    const subscribtion = jest.fn();
    const data = { module: 'UIManager' };
    connector.io.on = jest.fn();
    connector.on('event').subscribe(subscribtion);
    connector.io.on.mock.calls[0][1](data);
    expect(subscribtion).toBeCalledWith(data);
  });
});
