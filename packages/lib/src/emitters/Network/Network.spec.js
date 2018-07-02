import { ReplaySubject, Observable } from 'rxjs/Rx';
import Network from './index';
import EmitterType from '../../enum/EmitterType.json';

describe('Network', () => {
  beforeEach(() => {
    Observable.clear();
  });
  it('should have an instace of BehaviorSubject when instancied', () => {
    const network = new Network();
    expect(network).toBeInstanceOf(ReplaySubject);
  });

  it('should have a type network', () => {
    const network = new Network();
    expect(network.type).toBe(EmitterType.Network);
  });

  it('should return an observable when asObservable is call', () => {
    const console = new Network();
    expect(console.asObservable()).toBe(Observable.instance);
  });
});
