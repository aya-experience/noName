'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rx = require('rxjs/Rx');

var _Connector2 = require('../Connector/');

var _Connector3 = _interopRequireDefault(_Connector2);

var _constant = require('../constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebConnector = function (_Connector) {
  _inherits(WebConnector, _Connector);

  function WebConnector(_ref) {
    var _ref$server = _ref.server,
        server = _ref$server === undefined ? null : _ref$server;

    _classCallCheck(this, WebConnector);

    var _this = _possibleConstructorReturn(this, (WebConnector.__proto__ || Object.getPrototypeOf(WebConnector)).call(this, server, 'client'));

    _this.on = _this.on.bind(_this);
    return _this;
  }

  _createClass(WebConnector, [{
    key: 'on',
    value: function on(ev) {
      var _this2 = this;

      return _Rx.Observable.create(function (observer) {
        var onData = function onData(data) {
          return observer.next(data);
        };
        _this2.io.on(ev, onData);
        _this2.emit(ev, 'on');
        return function () {
          _this2.emit(ev, 'off');
          _this2.io.off(ev, onData);
        };
      });
    }
  }, {
    key: 'getConsole',
    value: function getConsole() {
      return this.on(_constant2.default.Console);
    }
  }, {
    key: 'getTreeView',
    value: function getTreeView() {
      return this.on(_constant2.default.TreeView);
    }
  }]);

  return WebConnector;
}(_Connector3.default);

exports.default = WebConnector;