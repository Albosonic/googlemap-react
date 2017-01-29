'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapService = exports.MapService = function MapService(ComposedComponent) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.directionsService = new google.maps.DirectionsService();
      _this.directionsDisplay = new google.maps.DirectionsRenderer();
      return _this;
    }

    _createClass(_class, [{
      key: 'routeService',
      value: function routeService(map, request) {
        var _this2 = this;

        this.directionsDisplay.setMap(map);
        return new Promise(function (resolve, reject) {
          _this2.directionsService.route(request, function (result, status) {
            if (status === 'OK') {
              resolve(result.routes[0].legs[0].steps);
              _this2.directionsDisplay.setDirections(result);
            } else {
              reject(status);
            }
          });
        });
      }
    }, {
      key: 'appendStyle',
      value: function appendStyle() {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "../styles/styles.css";
        link.media = 'all';
        head.appendChild(link);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, {
          routeService: this.routeService.bind(this),
          appendStyle: this.appendStyle.bind(this) });
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

exports.default = MapService;