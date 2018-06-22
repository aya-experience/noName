import { ReplaySubject, Observable } from 'rxjs/Rx';
import Logger from './index';
import EmitterType from '../../enum/EmitterType.json';

describe('Logger', () => {
  beforeEach(() => {
    Observable.clear();
  });
  it('should have an instace of BehaviorSubject when instancied', () => {
    const logger = new Logger();
    expect(logger).toBeInstanceOf(ReplaySubject);
  });

  it('should have a type Logger', () => {
    const logger = new Logger();
    expect(logger.type).toBe(EmitterType.Logger);
  });

  it('should return an observable when asObservable is call', () => {
    const console = new Logger();
    expect(console.asObservable()).toBe(Observable.instance);
  });
});
