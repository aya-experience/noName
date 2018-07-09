'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connector = function () {
  _createClass(Connector, [{
    key: 'emit',
    value: function emit(ev, data) {
      this.io.emit(ev, data);
    }
  }], [{
    key: 'buildEndPointUrl',
    value: function buildEndPointUrl(server, namespace) {
      return (server || '') + (namespace && '/' + namespace || '') || null;
    }
  }]);

  function Connector(server, namespace) {
    _classCallCheck(this, Connector);

    var url = Connector.buildEndPointUrl(server, namespace);
    this.io = (0, _socket2.default)(url);
    this.emit = this.emit.bind(this);
  }

  return Connector;
}();

exports.default = Connector;