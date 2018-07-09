import { Observable } from 'rxjs/Rx';
import LoggerJSMiddleware from './';
import EmitterType from '../../enum/EmitterType.json';

jest.mock('rxjs/Rx');

describe('LoggerJSMiddleware', () => {
  let data;
  let obs;
  let loggerJSMiddleware;
  let responseDispacther;

  beforeEach(() => {
    Observable.clear();
    responseDispacther = { handle: jest.fn() };
    loggerJSMiddleware = new LoggerJSMiddleware(responseDispacther);
    data = [{ type: 10, value: 'toto' }, { type: 0, value: 'toto' }, { type: 10, value: 'toto' }];
    obs = Observable.from(data);
  });

  it('should filter all data with type == 10', () => {
    expect(LoggerJSMiddleware.filter(data[0])).toBeFalsy();
  });

  it('should not filter all data with type != 10', () => {
    expect(LoggerJSMiddleware.filter(data[1])).toBeTruthy();
  });

  it('should have handle method that return an observable', () => {
    expect(loggerJSMiddleware.handle(obs)).toBe(Observable.instance);
  });

  it('should call handle with a response when log is call with a property type = 10', () => {
    loggerJSMiddleware.log({ type: 10, value: 'toto' });
    const response = responseDispacther.handle.mock.calls[0][0];
    expect(response).toMatchObject({
      type: EmitterType.LoggerJS,
      data: { type: 10, value: 'toto' },
    });
  });

  it('should not call handle with a response when log is call with a property type != 10 ', () => {
    loggerJSMiddleware.log({ type: 0, value: 'toto' });
    expect(responseDispacther.handle).not.toBeCalled();
  });
});
