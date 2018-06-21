import { Observable } from 'rxjs';
import Socket from './index';

describe('Socket', () => {
  let io;
  let socket;

  beforeEach(() => {
    io = {
      on: jest.fn(),
      emit: jest.fn(),
      removeListener: jest.fn(),
    };
    socket = new Socket(io);
  });

  it('should have a io attribut', () => {
    expect(socket.socket).toBe(io);
  });

  it('should call disconnect at the construction ', () => {
    expect(io.on).toBeCalledWith('disconnect', expect.any(Function));
  });

  it('should remove all subscriber when _onClose is call', () => {
    socket.subscriptions = {
      Console: { unsubscribe: jest.fn() },
      TreeView: { unsubscribe: jest.fn() },
    };
    socket._onClose();
    expect(socket.subscriptions).toEqual({});
  });

  it('should call unsubscribe on the first subscription when _onClose is call', () => {
    const Console = { unsubscribe: jest.fn() };
    socket.subscriptions = {
      Console,
      TreeView: { unsubscribe: jest.fn() },
    };
    socket._onClose();
    expect(Console.unsubscribe).toBeCalled();
  });

  it('should call unsubscribe on the last subscription when _onClose is call', () => {
    const TreeView = { unsubscribe: jest.fn() };
    socket.subscriptions = {
      Console: { unsubscribe: jest.fn() },
      TreeView,
    };
    socket._onClose();
    expect(TreeView.unsubscribe).toBeCalled();
  });

  it('should return an observable when on is call', () => {
    expect(socket.on('test')).toBeInstanceOf(Observable);
  });

  it('should call io.on when the observable return by on is subscribe', () => {
    socket.on('test').subscribe();
    expect(io.on).toBeCalledWith('test', expect.any(Function));
  });

  it('should return a value to the obervable when io receive a message', () => {
    const handler = jest.fn();
    socket.on('test').subscribe(handler);
    io.on.mock.calls[1][1]('banane');
    expect(handler).toBeCalledWith('banane');
  });

  it('should call on with disconnect', () => {
    socket.on = jest.fn();
    socket.disconnect();
    expect(socket.on).toBeCalledWith('disconnect');
  });

  it('should io.emit when emit is call', () => {
    const ev = 'kiwi';
    const value = 'smoothie';
    socket.emit(ev, value);
    expect(io.emit).toBeCalledWith(ev, value);
  });

  it('should remove the listener when on is unsubscribe', () => {
    socket
      .on('test')
      .subscribe()
      .unsubscribe();
    expect(io.removeListener).toBeCalled();
  });

  it('should add a subscribtion when readEmitter is call', () => {
    const subscribtion = {};
    const observable = { subscribe: jest.fn(() => subscribtion) };
    const emitter = { type: 'Console', asObservable: jest.fn(() => observable) };
    socket.readEmitter(emitter);
    expect(socket.subscriptions[emitter.type]).toBe(subscribtion);
  });

  it('should not add a subscribtion when a emitter with same name is already subscribe', () => {
    const subscribtion = {};
    const observable = { subscribe: jest.fn(() => subscribtion) };
    const emitter = { type: 'Console', asObservable: jest.fn(() => observable) };
    socket.subscriptions = { Console: 'present' };
    socket.readEmitter(emitter);
    expect(socket.subscriptions[emitter.type]).not.toBe(subscribtion);
  });

  it('should call asObservable on emitter when readEmitter is call', () => {
    const subscribtion = {};
    const observable = { subscribe: jest.fn(() => subscribtion) };
    const emitter = { type: 'Console', asObservable: jest.fn(() => observable) };
    socket.readEmitter(emitter);
    expect(emitter.asObservable).toBeCalled();
  });

  it('should call subscribe to the emitter', () => {
    const subscribtion = {};
    const observable = { subscribe: jest.fn(() => subscribtion) };
    const emitter = { type: 'Console', asObservable: jest.fn(() => observable) };
    socket.readEmitter(emitter);
    expect(emitter.asObservable).toBeCalled();
  });

  it('should call emit when data came from the emitter', () => {
    const subscribtion = {};
    const observable = { subscribe: jest.fn(() => subscribtion) };
    const emitter = { type: 'Console', asObservable: jest.fn(() => observable) };
    const data = 'data';
    socket.emit = jest.fn();
    socket.readEmitter(emitter);
    observable.subscribe.mock.calls[0][0](data);
    expect(socket.emit).toBeCalledWith(emitter.type, data);
  });

  it('should remove subsciption at the emitter type key', () => {
    const subscribtion = { unsubscribe: jest.fn() };
    const emitter = { type: 'Console' };
    socket.subscriptions[emitter.type] = subscribtion;
    socket.unreadEmitter(emitter);
    expect(socket.subscriptions[emitter.type]).toBeUndefined();
  });

  it('should call unsubscribe to subsciption at the emitter type key', () => {
    const subscribtion = { unsubscribe: jest.fn() };
    const emitter = { type: 'Console' };
    socket.subscriptions[emitter.type] = subscribtion;
    socket.unreadEmitter(emitter);
    expect(subscribtion.unsubscribe).toBeCalled();
  });

  it('should not call unsubscribe when no subsciption exist with the emitter type', () => {
    const subscribtion = { unsubscribe: jest.fn() };
    const emitter = { type: 'Console' };
    socket.unreadEmitter(emitter);
    expect(subscribtion.unsubscribe).not.toBeCalled();
  });

  it('should return the socket id', () => {
    io.id = 'socketId';
    expect(socket.id).toBe(io.id);
  });
});
