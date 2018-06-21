import NotFoundEmitter from './index';
import EmitterType from '../../enum/EmitterType.json';

describe('NotFoundEmitter', () => {
  it('should have a type NotFound', () => {
    const notFound = new NotFoundEmitter();
    expect(notFound.type).toBe(EmitterType.NotFound);
  });
});
