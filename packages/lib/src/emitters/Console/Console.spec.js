import { ReplaySubject, Observable } from 'rxjs/Rx';
import Console from './index';
import EmitterType from '../../enum/EmitterType.json';

describe('Console', () => {
  beforeEach(() => {
    Observable.clear();
  });
  it('should have an instace of BehaviorSubject when instancied', () => {
    const console = new Console();
    expect(console).toBeInstanceOf(ReplaySubject);
  });

  it('should have a type Console', () => {
    const console = new Console();
    expect(console.type).toBe(EmitterType.Console);
  });

  it('should return an observable when asObservable is call', () => {
    const console = new Console();
    expect(console.asObservable()).toBe(Observable.instance);
  });
});
