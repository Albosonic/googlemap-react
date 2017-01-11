'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MapService = require('./MapService');

var _MapService2 = _interopRequireDefault(_MapService);

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
      neWmap: {},
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
    return _this;
  }

  _createClass(GoogleMapComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var infoWindow = void 0;
      var map = void 0;
      var mapID = "mapDiv" + this.props.nMap;

      map = new google.maps.Map(document.getElementById(mapID), this.props.mapOptions);
      infoWindow = new google.maps.InfoWindow({ map: map });
      this.props.routeService(map, this.state.request);
      this.setState({ newMap: map });
    }
  }, {
    key: 'handleRoute',
    value: function handleRoute(e) {
      var _this2 = this;

      e.preventDefault();
      var start = e.target.childNodes[0].value || this.state.origin;
      var end = e.target.childNodes[1].value || this.state.destination;

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
        return _this2.props.routeService(_this2.state.newMap, _this2.state.request);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var style = { height: "50%", width: "50%", position: "absolute", margin: "5% 0% 5% 10%" };

      return _react2.default.createElement(
        'div',
        { className: 'container-map' },
        _react2.default.createElement(
          'div',
          { className: 'map', style: style, id: 'mapDiv' + this.props.nMap },
          'Google Maps'
        ),
        _react2.default.createElement(
          'form',
          { action: '', onSubmit: function onSubmit(e) {
              _this3.handleRoute(e);
            } },
          _react2.default.createElement('input', { type: 'text', placeholder: 'origin' }),
          _react2.default.createElement('input', { type: 'text', placeholder: 'destination' }),
          _react2.default.createElement(
            'button',
            {
              type: 'submit',
              className: 'get-map-directions' },
            'directions'
          )
        )
      );
    }
  }]);

  return GoogleMapComponent;
}(_react.Component);

exports.default = (0, _MapService2.default)(GoogleMapComponent);
