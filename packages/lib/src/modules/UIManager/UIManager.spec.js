import UIManager from './index';
import View from '../../models/View/index';
import EmitterType from '../../enum/EmitterType.json';


describe('RTCEventEmitter', () => {
  let instance;
  let sessionManager;
  let viewContainer;

  beforeEach(() => {
    viewContainer = {
      clearJSResponders: jest.fn(),
      setJsResponder: jest.fn(),
      get: jest.fn(),
      addView: jest.fn(),
    };
    sessionManager = {
      get: jest.fn(() => viewContainer),
    };
    instance = new UIManager(sessionManager);
  });

  it('should call sessionManager.get', () => {
    instance._getViewContainer();
    expect(sessionManager.get).toBeCalledWith('ViewContainer');
  });

  it('should call viewContainer.clearJSResponders', () => {
    instance.clearJSResponder();
    expect(viewContainer.clearJSResponders).toBeCalled();
  });

  it('should clearJSResponders return a response', () => {
    const response = instance.clearJSResponder();
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should call viewContainer.setJSResponder', () => {
    const args = [5, 56];
    instance.setJSResponder(args);
    expect(viewContainer.setJsResponder).toBeCalledWith(5, 56);
  });

  it('should setJSResponder return a response', () => {
    const args = [5, 56];
    const response = instance.setJSResponder(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should createView update the viewContainer', () => {
    const args = [1, 'HelloClassName', null, []];
    instance.createView(args);
    expect(viewContainer.addView).toBeCalledWith(expect.any(View));
  });

  it('should createView return a response', () => {
    const args = [1, 'HelloClassName', null, []];
    const response = instance.createView(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should setChildren update the children of a view', () => {
    const args = [1, [1, 2, 3]];
    const parent = { setChildren: jest.fn() };
    viewContainer.get.mockReturnValueOnce(parent);
    instance.setChildren(args);
    expect(parent.setChildren).toBeCalledWith(expect.any(Array));
  });

  it('should setChildren return a response', () => {
    const args = [1, [1, 2, 3]];
    const parent = { setChildren: jest.fn() };
    viewContainer.get.mockReturnValueOnce(parent);
    const response = instance.setChildren(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should _move throw an error', () => {
    expect(() => {
      instance._move(null, null, null);
    }).toThrowError();
  });

  it('should _removeChildren the selected shildren of one parent', () => {
    const parent = {
      children: [{ id: 1 }, { id: 2 }, { id: 3 }],
      setChildren: jest.fn(),
    };
    viewContainer.get.mockReturnValueOnce(parent);
    instance._removeChildren(0, [0]);
    expect(parent.setChildren).toBeCalledWith([{ id: 2 }, { id: 3 }]);
  });

  it('should _removeChildren the selected shildren of one parent and work with multiple element', () => {
    const parent = {
      children: [{ id: 1 }, { id: 2 }, { id: 3 }],
      setChildren: jest.fn(),
    };
    viewContainer.get.mockReturnValueOnce(parent);
    instance._removeChildren(0, [0, 2]);
    expect(parent.setChildren).toBeCalledWith([{ id: 2 }]);
  });

  it('should _addChildren the selected shildren of one parent and work with multiple element', () => {
    const parent = {
      children: [{ id: 1 }, { id: 2 }, { id: 3 }],
      setChildren: jest.fn(),
    };
    viewContainer.get.mockReturnValueOnce(parent);
    viewContainer.get.mockImplementation(value => ({ id: value }));
    instance._addChildren(0, [0, 4], [0, 4]);
    expect(parent.setChildren)
      .toBeCalledWith([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  });

  it('should manageChildren call _move when args[1] args[2] is set', () => {
    const args = [1, [2], [3], [], [], []];
    instance._move = jest.fn();
    instance.manageChildren(args);
    expect(instance._move)
      .toBeCalledWith(args[0], args[1], args[2]);
  });


  it('should manageChildren call _addChildren when args[3] args[4] is set', () => {
    const args = [1, [], [], [3], [4], []];
    instance._addChildren = jest.fn();
    instance.manageChildren(args);
    expect(instance._addChildren)
      .toBeCalledWith(args[0], args[3], args[4]);
  });

  it('should manageChildren call _removeChildren when args[3] args[4] is set', () => {
    const args = [1, [], [], [], [], [4]];
    instance._removeChildren = jest.fn();
    instance.manageChildren(args);
    expect(instance._removeChildren)
      .toBeCalledWith(args[0], args[5]);
  });


  it('should manageChildren return a response', () => {
    const args = [1, [], [], [], [], []];
    const response = instance.manageChildren(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });


  it('should updateView set new props', () => {
    const args = [1, 'name', { hello: 'world' }];
    const view = { setProps: jest.fn(), setClassName: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    instance.updateView(args);
    expect(view.setProps).toBeCalledWith(args[2]);
  });

  it('should updateView set a new ClassName', () => {
    const args = [1, 'name', { hello: 'world' }];
    const view = { setProps: jest.fn(), setClassName: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    instance.updateView(args);
    expect(view.setClassName).toBeCalledWith(args[1]);
  });

  it('should updateView return a response', () => {
    const args = [1, 'name', { hello: 'world' }];
    const view = { setProps: jest.fn(), setClassName: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    const response = instance.updateView(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should measureInWindow addMesure in a view', () => {
    const args = [1, 55];
    const view = { addMeasures: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    instance.measureInWindow(args);
    expect(view.addMeasures).toBeCalledWith('measureInWindow', args[1]);
  });

  it('should  measureInWindow  return a response', () => {
    const args = [1, 55];
    const view = { addMeasures: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    const response = instance.measureInWindow(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });


  it('should dispatchViewManagerCommand add a new command', () => {
    const args = [1, 55, []];
    const view = { addCommandCall: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    instance.dispatchViewManagerCommand(args);
    expect(view.addCommandCall).toBeCalledWith(args[1], args[2]);
  });

  it('should dispatchViewManagerCommand return a response', () => {
    const args = [1, 55, []];
    const view = { addCommandCall: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    const response = instance.dispatchViewManagerCommand(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });

  it('should measure add measure in a view', () => {
    const args = [1, 55];
    const view = { addMeasures: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    instance.measure(args);
    expect(view.addMeasures).toBeCalledWith('measure', args[1]);
  });

  it('should  measure  return a response', () => {
    const args = [1, 55];
    const view = { addMeasures: jest.fn() };
    viewContainer.get.mockReturnValueOnce(view);
    const response = instance.measure(args);
    expect(response).toMatchObject({
      type: EmitterType.TreeView,
      data: viewContainer,
    });
  });
});
