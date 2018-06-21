import { Observable } from 'rxjs/Rx';
import Controller from './';
import EmitterType from '../../enum/EmitterType.json';
import NotFoundError from '../../errors/NotFoundError/index';

jest.mock('rxjs/Rx');


const socketGenerator = (observable = Observable.instance) => ({
  disconnect: jest.fn(() => observable),
  on: jest.fn(() => observable),
  readEmitter: jest.fn(),
  unreadEmitter: jest.fn(),
  emit: jest.fn(),
});

describe('Controller', () => {
  let socketServer;
  let moduleContainer;
  let emitterContainer;
  let middlewareContainer;
  let controller;

  beforeEach(() => {
    socketServer = {};
    moduleContainer = { get: jest.fn() };
    emitterContainer = { get: jest.fn() };
    middlewareContainer = {};
    Observable.clear();
    controller = new Controller(
      socketServer,
      moduleContainer,
      emitterContainer,
      middlewareContainer,
    );
  });
  // Test start
  it('should call connect with /source on socketServer when start is call', () => {
    socketServer.connect = jest.fn(() => ({ subscribe: jest.fn() }));
    controller.start();
    expect(socketServer.connect).toBeCalledWith('/source');
  });

  it('should call connect with /client on socketServer when start is call', () => {
    socketServer.connect = jest.fn(() => ({ subscribe: jest.fn() }));
    controller.start();
    expect(socketServer.connect).toBeCalledWith('/client');
  });

  it('should call subscribe on /source observable', () => {
    const observable = { subscribe: jest.fn() };
    socketServer.connect = jest.fn(() => observable);
    controller.start();
    expect(observable.subscribe).toBeCalledWith(
      controller.handleSource,
      expect.any(Function),
      expect.any(Function),
    );
  });

  it('should call subscribe on /client observable', () => {
    const observable = { subscribe: jest.fn() };
    socketServer.connect = jest.fn(() => observable);
    controller.start();
    expect(observable.subscribe).toBeCalledWith(
      controller.handleClient,
      expect.any(Function),
      expect.any(Function),
    );
  });

  // onError

  it('should onError return a function', () => {
    expect(Controller.onError('Hello')).toEqual(expect.any(Function));
  });

  it('should onError call console log with error message', () => {
    console.log = jest.fn();
    Controller.onError('Hello')({ message: 'message' });
    expect(console.log).toBeCalledWith('Hello: error - message');
  });

  // onComplete

  it('should onComplete return a function', () => {
    expect(Controller.onComplete('Hello')).toEqual(expect.any(Function));
  });

  it('should onComplete call console log', () => {
    console.log = jest.fn();
    Controller.onComplete('Hello')();
    expect(console.log).toBeCalledWith('Hello: Stop listenning source');
  });

  // onConnect

  it('should onConnect call console log ', () => {
    console.log = jest.fn();
    Controller.onConnect('Hello', 'id00045');
    expect(console.log).toBeCalledWith('Hello - id00045: connected');
  });

  // onDisconnect

  it('should onDisconnect return a function', () => {
    expect(Controller.onDisconnect('Hello', 'id00045')).toEqual(expect.any(Function));
  });

  it('should onDisconnect call console log', () => {
    console.log = jest.fn();
    Controller.onDisconnect('Hello', 'id00045')();
    expect(console.log).toBeCalledWith('Hello - id00045: disconnected');
  });

  // test handleSource
  it('should call socket disconnect', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(socket.disconnect).toBeCalled();
  });

  it('should call socket subscribe on disconnect observable', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(Observable.instance.subscribe).toBeCalled();
  });

  it('should call "on" on socket with "bridge-data"', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(socket.on).toBeCalledWith('bridge-data');
  });

  it('should call let on the "bridge-data" Observable', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(Observable.instance.let).toBeCalledWith(middlewareContainer.handle);
  });

  it('should call map on the "bridge-data" Observable', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(Observable.instance.map).toBeCalledWith(controller.moduleMapper);
  });

  it('should call subscribe on the "bridge-data" Observable', () => {
    const socket = socketGenerator();
    controller.handleSource(socket);
    expect(Observable.instance.subscribe).toBeCalledWith(emitterContainer.handle);
  });

  // moduleMapper
  it('should call module.container.get with the data', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    controller.moduleMapper(data);
    expect(moduleContainer.get).toBeCalledWith(data.module);
  });

  it('should call handle with the data on the module returned by moduleContainer', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const module = { handle: jest.fn() };
    moduleContainer.get.mockReturnValueOnce(module);
    controller.moduleMapper(data);
    expect(module.handle).toBeCalledWith(data);
  });

  it('should return a response', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const response = { type: EmitterType.TreeView };
    const module = { handle: jest.fn(() => response) };
    moduleContainer.get.mockReturnValueOnce(module);
    expect(controller.moduleMapper(data)).toBe(response);
  });

  it('should catch any error from moduleContainer.get', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const error = new Error('An error');
    moduleContainer.get = jest.fn(() => {
      throw error;
    });
    expect(controller.moduleMapper(data)).toEqual({
      type: EmitterType.Error,
      data: {
        message: error.message,
        data,
      },
    });
  });

  it('should catch any error from module.handle', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const error = new Error('An error');
    const module = {
      handle: jest.fn(() => {
        throw error;
      }),
    };
    moduleContainer.get.mockReturnValueOnce(module);
    expect(controller.moduleMapper(data)).toEqual({
      type: EmitterType.Error,
      data: {
        message: error.message,
        data,
      },
    });
  });

  it('should catch NotFoundError from moduleContainer.get', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const error = new NotFoundError('An error');
    moduleContainer.get = jest.fn(() => {
      throw error;
    });
    expect(controller.moduleMapper(data)).toMatchObject({
      type: EmitterType.NotFound,
      data: {
        message: error.message,
        data,
      },
    });
  });

  it('should catch NotFoundError from module.handle', () => {
    const data = { module: 'UIManager', methode: 'createView' };
    const error = new NotFoundError('An error');
    const module = {
      handle: jest.fn(() => {
        throw new NotFoundError('An error');
      }),
    };
    moduleContainer.get.mockReturnValueOnce(module);
    expect(controller.moduleMapper(data)).toEqual({
      type: EmitterType.NotFound,
      data: {
        message: error.message,
        data,
      },
    });
  });

  // Handle Client
  it('should call socket disconnect in handle client', () => {
    const socket = socketGenerator();
    controller.handleClient(socket);
    expect(socket.disconnect).toBeCalled();
  });

  it('should call socket subscribe on disconnect observable in handle client', () => {
    const socket = socketGenerator();
    controller.handleClient(socket);
    expect(Observable.instance.subscribe).toBeCalled();
  });

  it('should call map with emitterContainer.get in handle client', () => {
    const socket = socketGenerator();
    controller.handleClient(socket);
    expect(Observable.instance.map).toBeCalledWith(emitterContainer.get);
  });

  // Handle Message
  it('should HandleMessage return a function', () => {
    const emitter = { type: 'HelloType' };
    const socket = socketGenerator();
    expect(Controller.handleMessage(socket, emitter)).toEqual(expect.any(Function));
  });

  it('should HandleMessage with message on call socket.readEmitter', () => {
    const emitter = { type: 'HelloType' };
    const socket = socketGenerator();
    Controller.handleMessage(socket, emitter)('on');
    expect(socket.readEmitter).toBeCalledWith(emitter);
  });

  it('should HandleMessage with message off call socket.undreadEmitter', () => {
    const emitter = { type: 'HelloType' };
    const socket = socketGenerator();
    Controller.handleMessage(socket, emitter)('off');
    expect(socket.unreadEmitter).toBeCalledWith(emitter);
  });

  it('should HandleMessage call socket.emit when the message is not known', () => {
    const emitter = { type: 'HelloType' };
    const socket = socketGenerator();
    Controller.handleMessage(socket, emitter)('Hello');
    expect(socket.emit).toBeCalledWith(emitter.type, { message: 'Unknow command' });
  });

  // handleSubscription

  it('should handleSubscription return a function', () => {
    const socket = socketGenerator();
    expect(Controller.handleSubscription(socket)).toEqual(expect.any(Function));
  });

  it('should handleSubscription call socket.on', () => {
    const socket = socketGenerator();
    const emitter = { type: 'hello' };
    Controller.handleSubscription(socket)(emitter);
    expect(socket.on).toBeCalledWith(emitter.type);
  });

  it('should handleSubscription call obs.do', () => {
    const socket = socketGenerator();
    const emitter = { type: 'hello' };
    Controller.handleSubscription(socket)(emitter);
    expect(Observable.instance.do).toBeCalledWith(expect.any(Function));
  });
});
