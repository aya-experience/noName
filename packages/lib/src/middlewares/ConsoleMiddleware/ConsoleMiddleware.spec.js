import { Observable } from 'rxjs/Rx';
import ConsoleMiddleware from './';

jest.mock('rxjs/Rx');

describe('ConsoleMiddleware', () => {
  let data;
  let obs;
  let consoleMiddleware;
  let responseDispacther;

  beforeEach(() => {
    Observable.clear();
    responseDispacther = { handle: jest.fn() };
    consoleMiddleware = new ConsoleMiddleware(responseDispacther);
    data = [1, 2, 3];
    obs = Observable.from(data);
  });

  it('should have handle method that return an observable', () => {
    expect(consoleMiddleware.handle(obs)).toBe(Observable.instance);
  });

  it('should call handle with a response when log is call', () => {
    consoleMiddleware.log({ value: 'toto' });
    const response = responseDispacther.handle.mock.calls[0][0];
    expect(response).toMatchObject({
      type: 'Console',
      data: { value: 'toto' },
    });
  });
});
