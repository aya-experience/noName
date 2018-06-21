import { Observable } from 'rxjs/Rx';
import ArraySplitterMiddleware from './index';

describe('ArraySplitterMiddleware', () => {
  let data;
  let obs;
  let arraySplitter;

  beforeEach(() => {
    Observable.clear();
    arraySplitter = new ArraySplitterMiddleware();
    obs = Observable.instance;
  });

  it('should have a method handle return and observable', () => {
    expect(arraySplitter.handle(obs)).toBe(Observable.instance);
  });

  it('should call Observable from', () => {
    arraySplitter.handle(obs);
    const data = [1, 2, 3];
    const closure = Observable.instance.flatMap.mock.calls[0][0];
    closure(data);
    expect(Observable.from).toBeCalledWith(data);
  });
});
