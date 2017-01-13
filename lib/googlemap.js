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
        origin: '539 Mandana Blvd, Oakland CA 94610',
        destination: '710 las Lomas Dr, La Habra CA 90631',
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
      var _this4 = this;

      var style = { height: "50%", width: "50%", position: "absolute", margin: "5% 0% 5% 10%" };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container-map' },
          _react2.default.createElement(
            'div',
            { className: 'map', style: style, id: 'mapDiv' + this.props.nMap },
            'Google Maps'
          ),
          _react2.default.createElement(
            'form',
            { className: 'map-form', onSubmit: function onSubmit(e) {
                _this4.handleRoute(e);
              } },
            _react2.default.createElement('input', { className: 'map-input', type: 'text', placeholder: 'origin' }),
            _react2.default.createElement('input', { className: 'map-input', type: 'text', placeholder: 'destination' }),
            _react2.default.createElement(
              'button',
              {
                className: 'map-directions-button',
                type: 'submit' },
              'directions'
            )
          )
        ),
        _react2.default.createElement(_Directions2.default, { steps: this.state.steps })
      );
    }
  }]);

  return GoogleMapComponent;
}(_react.Component);

exports.default = (0, _MapService2.default)(GoogleMapComponent);
