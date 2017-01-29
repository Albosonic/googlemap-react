'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MapService = require('./MapService');

var _MapService2 = _interopRequireDefault(_MapService);

var _Directions = require('./Directions');

var _Directions2 = _interopRequireDefault(_Directions);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMapComponent = function (_Component) {
  _inherits(GoogleMapComponent, _Component);

  function GoogleMapComponent(props) {
    _classCallCheck(this, GoogleMapComponent);

    var _this = _possibleConstructorReturn(this, (GoogleMapComponent.__proto__ || Object.getPrototypeOf(GoogleMapComponent)).call(this, props));

    _this.state = {
      steps: {},
      request: {
        origin: '1 Frank H Ogawa Plaza, Oakland, CA 94612',
        destination: '1600 Pennsylvania Ave NW, Washington, DC 20500',
        travelMode: 'DRIVING',
        transitOptions: {
          arrivalTime: new Date(),
          departureTime: new Date()
        }
      }
    };
    _this.map;
    return _this;
  }

  _createClass(GoogleMapComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.appendStyle();
      var mapID = "mapDiv" + this.props.nMap;
      this.map = new google.maps.Map(document.getElementById(mapID));
      var infoWindow = new google.maps.InfoWindow({ map: this.map });
      this.props.routeService(this.map, this.state.request).then(function (directions) {
        return _this2.setState({ steps: directions });
      });
    }
  }, {
    key: 'handleRoute',
    value: function handleRoute(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState({
        request: {
          origin: e.target.childNodes[0].value,
          destination: e.target.childNodes[1].value,
          travelMode: 'DRIVING',
          transitOptions: {
            arrivalTime: new Date(),
            departureTime: new Date()
          }
        }
      }, function () {
        return _this3.props.routeService(_this3.map, _this3.state.request).then(function (directions) {
          return _this3.setState({ steps: directions });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = { height: "50%", width: "50%", position: "absolute" };
      return _react2.default.createElement(
        'div',
        { className: 'container-package' },
        _react2.default.createElement(
          'div',
          { className: 'container-map' },
          _react2.default.createElement(
            'div',
            { className: 'map', style: style, id: 'mapDiv' + this.props.nMap },
            'Google Maps'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container-info' },
          _react2.default.createElement(_Form2.default, { className: 'form', handleRoute: this.handleRoute.bind(this) }),
          _react2.default.createElement(_Directions2.default, { steps: this.state.steps })
        )
      );
    }
  }]);

  return GoogleMapComponent;
}(_react.Component);

exports.default = (0, _MapService2.default)(GoogleMapComponent);