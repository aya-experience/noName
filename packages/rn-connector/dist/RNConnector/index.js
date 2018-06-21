'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter = require('react-native/Libraries/vendor/emitter/EventEmitter');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _rnSnoopy = require('rn-snoopy');

var _rnSnoopy2 = _interopRequireDefault(_rnSnoopy);

var _Connector2 = require('rn-noname-connector/src/Connector');

var _Connector3 = _interopRequireDefault(_Connector2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-unresolved, import/extensions */

// If you are using React 0.48 or below, then you should import:
// import EventEmitter from 'react-native/Libraries/EventEmitter/EventEmitter';


var activatedModule = ['Networking', 'RTCEventEmitter', 'AppRegistry', 'UIManager'];

var RNConnector = function (_Connector) {
  _inherits(RNConnector, _Connector);

  function RNConnector(_ref) {
    var server = _ref.server,
        _ref$eventName = _ref.eventName,
        eventName = _ref$eventName === undefined ? 'bridge-data' : _ref$eventName;

    _classCallCheck(this, RNConnector);

    var _this = _possibleConstructorReturn(this, (RNConnector.__proto__ || Object.getPrototypeOf(RNConnector)).call(this, server, 'source'));

    _this.eventName = eventName;
    _this.onData = _this.onData.bind(_this);
    return _this;
  }

  _createClass(RNConnector, [{
    key: 'onData',
    value: function onData(data) {
      this.emit(this.eventName, data);
    }
  }], [{
    key: 'onlyActivatedModule',
    value: function onlyActivatedModule(data) {
      return activatedModule.includes(data.module);
    }
  }, {
    key: 'filter',
    value: function filter(obs) {
      return obs.filter(RNConnector.onlyActivatedModule);
    }
  }, {
    key: 'stream',
    value: function stream(config) {
      var connector = new RNConnector(config);
      var emitter = new _EventEmitter2.default();
      var obs = _rnSnoopy2.default.stream(emitter);
      return RNConnector.filter(obs).bufferTime(1000).subscribe(connector.onData);
    }
  }]);

  return RNConnector;
}(_Connector3.default);

exports.default = RNConnector;