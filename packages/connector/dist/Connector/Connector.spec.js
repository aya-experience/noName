'use strict';

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
describe('Connector', function () {
  it('should have io to be set', function () {
    var connector = new _index2.default(null, null);
    expect(connector.io).toBeDefined();
  });

  it('should call io with server', function () {
    var server = 'http://localhost:3000';
    var connector = new _index2.default(server, null);
    expect(_socket2.default).toBeCalledWith(server);
  });

  it('should return / + namespace when server is null', function () {
    var connector = new _index2.default(null, 'hello');
    expect(_socket2.default).toBeCalledWith('/hello');
  });

  it('should return server + / + namespace when all param is set', function () {
    var connector = new _index2.default('http://localhost:3000', 'hello');
    expect(_socket2.default).toBeCalledWith('http://localhost:3000/hello');
  });

  it('should call io.emits', function () {
    var connector = new _index2.default(null, null);
    var ev = 'HelloWorld';
    var data = { className: 'kevin' };
    connector.io.emit = jest.fn();
    connector.emit(ev, data);
    expect(connector.io.emit).toBeCalledWith(ev, data);
  });
});