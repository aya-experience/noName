import { Observable } from 'rxjs/Rx';
import ArraySplitterMiddleware, { rules } from './index';

jest.mock('rxjs/Rx');

describe('ArraySplitterMiddleware', () => {
  let data;
  let obs;
  let purify;

  beforeEach(() => {
    Observable.clear();
    purify = new ArraySplitterMiddleware();
    data = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10, 11]];
    obs = Observable.from(data);
  });

  it('should have a method handle return and observable', () => {
    expect(purify.handle(obs)).toBe(Observable.instance);
  });

  it('should return false when the data as the networking data and contains sur ulr for socket io', () => {
    const func = rules[0];
    const line = { module: 'Networking', args: ['GET', 'http://192.168.1.149:3000/socket.io/'] };
    expect(func(line)).toBeFalsy();
  });

  it('should return true when the data as the networking data and contains sur ulr for socket io', () => {
    const func = rules[0];
    const line = { module: 'Other', args: ['GET', 'http://192.168.1.149:3000/socket.io/'] };
    expect(func(line)).toBeTruthy();
  });

  it('should call filter on observable', () => {
    const obs = { filter: jest.fn(() => obs) };
    purify.handle(obs);
    expect(obs.filter).toBeCalled();
  });

  it('should check call the first rules', () => {
    const line = { module: 'Other', args: ['GET', 'http://192.168.1.149:3000/socket.io/'] };
    rules[0] = jest.fn();
    ArraySplitterMiddleware.check(line);
    expect(rules[0]).toBeCalled();
  });

  it('should check call the last rules', () => {
    const line = { module: 'Other', args: ['GET', 'http://192.168.1.149:3000/socket.io/'] };
    rules[0] = jest.fn(() => true);
    rules[1] = jest.fn(() => true);
    rules[2] = jest.fn(() => true);
    ArraySplitterMiddleware.check(line);
    expect(rules[2]).toBeCalled();
  });

  it('should check not call the last rules', () => {
    const line = { module: 'Other', args: ['GET', 'http://192.168.1.149:3000/socket.io/'] };
    rules[0] = jest.fn(() => true);
    rules[1] = jest.fn(() => false);
    rules[2] = jest.fn(() => true);
    ArraySplitterMiddleware.check(line);
    expect(rules[2]).not.toBeCalled();
  });
});
