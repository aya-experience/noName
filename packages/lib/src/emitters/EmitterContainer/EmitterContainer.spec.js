import EmitterContainer from './index';
import EmitterType from '../../enum/EmitterType.json';
import Response from '../../models/Response/index';

describe('EmitterContainer', () => {
  let emitters;
  let container;

  beforeEach(() => {
    emitters = [
      { type: EmitterType.TreeView, next: jest.fn() },
      { type: EmitterType.Console, next: jest.fn() },
      { type: EmitterType.Error, next: jest.fn() },
    ];
    container = new EmitterContainer(emitters);
  });

  it('should build a map of emitter', () => {
    expect(container.emitters).toEqual({
      TreeView: emitters[0],
      Console: emitters[1],
      Error: emitters[2],
    });
  });

  it('should call the emitter of name response.type', () => {
    const data = 'data';
    const response = new Response(EmitterType.TreeView, data);
    container.handle(response);
    expect(emitters[0].next).toBeCalledWith(data);
  });

  it('should send a message to error emitter when unknow reponse.type is given', () => {
    const data = 'data';
    const response = new Response('unknow', data);
    container.handle(response);
    expect(emitters[2].next).toBeCalledWith({
      message: `No existing emitter for ${response.type} Response`,
    });
  });

  it('should send a message to error emitter when unknow reponse.type is given', () => {
    const data = 'data';
    const response = new Response('unknow', data);
    container.handle(response);
    expect(emitters[2].next).toBeCalledWith({
      message: `No existing emitter for ${response.type} Response`,
    });
  });

  it('should have 4 default emitter', () => {
    container = new EmitterContainer();
    expect(Object.keys(container.emitters)).toHaveLength(4);
  });
});
