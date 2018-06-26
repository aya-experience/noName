'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var MODULE_NAME = 'LoggerJS';
var TYPE = 10;
var INTERCEPTED_METHOD = ['log', 'error', 'info', 'warn'];

var LogInterceptor = function (_Subject) {
  _inherits(LogInterceptor, _Subject);

  function LogInterceptor() {
    _classCallCheck(this, LogInterceptor);

    var _this = _possibleConstructorReturn(this, (LogInterceptor.__proto__ || Object.getPrototypeOf(LogInterceptor)).call(this));

    _this.init();
    return _this;
  }

  _createClass(LogInterceptor, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      INTERCEPTED_METHOD.forEach(function (value) {
        console[value] = _this2.intercept(console[value], value);
      });
    }
  }, {
    key: 'intercept',
    value: function intercept(originalFn, method) {
      var _this3 = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this3.next({
          type: TYPE, module: MODULE_NAME, method: method, args: args
        });
        return originalFn.apply(console, args);
      };
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (!LogInterceptor.instance) {
        LogInterceptor.instance = new LogInterceptor();
      }
      return LogInterceptor.instance;
    }
  }]);

  return LogInterceptor;
}(_rxjs.Subject);

exports.default = LogInterceptor;