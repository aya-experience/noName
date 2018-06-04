import { Observable } from 'rxjs/Rx';
import ArraySplitterMiddleware from './index';

describe('ArraySplitterMiddleware', () => {
  let data;
  let obs;
  let arraySplitter;

  beforeEach(() => {
    arraySplitter = new ArraySplitterMiddleware();
    data = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10, 11]];
    obs = Observable.from(data);
  });

  it('should have a method handle return and observable', () => {
    expect(arraySplitter.handle(obs)).toBeInstanceOf(Observable);
  });

  it('should split [[x,x],[x,x]] to [x,x,x,x]', () => {
    const values = [];
    arraySplitter.handle(obs).subscribe(
      v => values.push(v),
      () => {},
      () => {
        expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      },
    );
  });
});
