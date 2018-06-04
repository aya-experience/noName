import { Observable } from 'rxjs/Rx';
import ConsoleMiddleware from './index';

describe('ConsoleMiddleware', () => {
  let data;
  let obs;
  let consoleMiddleware;
  let responseDispacther;

  beforeEach(() => {
    responseDispacther = { handle: jest.fn() };
    consoleMiddleware = new ConsoleMiddleware(responseDispacther);
    data = [1, 2, 3];
    obs = Observable.from(data);
  });

  it('should have handle method that return an observable', () => {
    expect(consoleMiddleware.handle(obs)).toBeInstanceOf(Observable);
  });

  it('should call next for each value of the observable', () => {
    consoleMiddleware.log = jest.fn();
    consoleMiddleware.handle(obs).subscribe();
    expect(consoleMiddleware.log).toHaveBeenCalledTimes(3);
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
