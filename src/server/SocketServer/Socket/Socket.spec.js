import { Observable } from 'rxjs';
import Socket from './';

describe('Socket', () => {
  let io;
  let socket;

  beforeEach(() => {
    io = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    socket = new Socket(io);
  });

  it('should have a io attribut', () => {
    expect(socket.socket).toBe(io);
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
    io.on.mock.calls[0][1]('banane');
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
});
