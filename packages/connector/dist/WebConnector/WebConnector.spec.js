'use strict';

var _rxjs = require('rxjs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('WebConnector', function () {
  var connector = void 0;
  var config = void 0;

  beforeEach(function () {
    config = { server: 'http://localhost:3000' };
    connector = new _index2.default(config);
  });

  it('should have io object', function () {
    expect(connector.io).not.toBeUndefined();
  });

  it('should have io object when no server adress is set', function () {
    connector = new _index2.default({});
    expect(connector.io).not.toBeUndefined();
  });

  it('should return an observable when on is called', function () {
    var observable = connector.on('event');
    expect(observable).toBeInstanceOf(_rxjs.Observable);
  });

  it('should call io.on when on is called', function () {
    connector.io.on = jest.fn();
    connector.on('event').subscribe();
    expect(connector.io.on).toBeCalled();
  });

  it('should receive all even on subscription func', function () {
    var subscribtion = jest.fn();
    var data = { module: 'UIManager' };
    connector.io.on = jest.fn();
    connector.on('event').subscribe(subscribtion);
    connector.io.on.mock.calls[0][1](data);
    expect(subscribtion).toBeCalledWith(data);
  });

  it('should shut down connection on unsubscribe', function () {
    connector.emit = jest.fn();
    connector.io.off = jest.fn();
    connector.on('event').subscribe().unsubscribe();
    expect(connector.emit).toBeCalledWith('event', 'off');
  });

  it('should remove eventEmitter of connection on unsubscribe', function () {
    connector.emit = jest.fn();
    connector.io.off = jest.fn();
    connector.on('event').subscribe().unsubscribe();
    expect(connector.io.off).toBeCalledWith('event', expect.any(Function));
  });

  it('should return an obs when getConsole is call', function () {
    connector.on = jest.fn(function () {
      return 'observable';
    });
    expect(connector.getConsole()).toBe('observable');
  });

  it('should return an obs when getTreeView is call', function () {
    connector.on = jest.fn(function () {
      return 'observable';
    });
    expect(connector.getTreeView()).toBe('observable');
  });
});