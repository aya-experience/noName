'use strict';

var _rnSnoopy = require('rn-snoopy');

var _rnSnoopy2 = _interopRequireDefault(_rnSnoopy);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _constants = require('../constants.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jest.mock('rn-snoopy');*/

describe('RNConnector', function () {
  it('should create a RNConnector with deault value', function () {
    var connector = new _index2.default({});
    expect(connector).toMatchObject({
      eventName: 'bridge-data'
    });
  });

  it('should create a RNConnector with custom event', function () {
    var config = { eventName: 'event-hello' };
    var connector = new _index2.default(config);
    expect(connector).toMatchObject({
      eventName: 'event-hello'
    });
  });

  it('should call snoopy stream when stream is call', function () {
    _index2.default.stream({});
    expect(_rnSnoopy2.default.stream).toHaveBeenCalled();
  });

  it('should call emit when onData is call', function () {
    var connector = new _index2.default({});
    var data = 'Hello';
    connector.emit = jest.fn();
    connector.onData(data);
    expect(connector.emit).toBeCalledWith('bridge-data', data);
  });

  it('should return false when a module is not in ActivatedModule', function () {
    expect(_index2.default.onlyActivatedModule({ module: 'AbsolutelyUnknownModule' })).toBeFalsy();
  });

  it('should return true when a module is a ActivatedModule', function () {
    expect(_index2.default.onlyActivatedModule({ module: _constants.activatedModule[0] })).toBeTruthy();
  });

  it('should filter on the observable passed to filter method', function () {
    var obs = { filter: jest.fn(function () {
        return obs;
      }) };
    _index2.default.filter(obs);
    expect(obs.filter).toBeCalledWith(_index2.default.onlyActivatedModule);
  });

  it('should filter return an obs', function () {
    var obs = { filter: jest.fn(function () {
        return obs;
      }) };
    expect(_index2.default.filter(obs)).toBe(obs);
  });
});