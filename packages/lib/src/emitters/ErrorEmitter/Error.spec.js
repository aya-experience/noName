import { ReplaySubject, Observable } from 'rxjs/Rx';
import ErrorEmitter from './index';
import EmitterType from '../../enum/EmitterType.json';

describe('ErrorEmitter', () => {
  beforeEach(() => {
    Observable.clear();
  });
  it('should have an instace of ReplaySubject when instancied', () => {
    const errorEmitter = new ErrorEmitter();
    expect(errorEmitter).toBeInstanceOf(ReplaySubject);
  });

  it('should have a type Error', () => {
    const errorEmitter = new ErrorEmitter();
    expect(errorEmitter.type).toBe(EmitterType.Error);
  });

  it('should return an observable when asObservable is call', () => {
    const errorEmitter = new ErrorEmitter();
    expect(errorEmitter.asObservable()).toBe(Observable.instance);
  });
});
