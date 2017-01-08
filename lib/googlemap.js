'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoogleMapComponent = function (_React$Component) {
  _inherits(GoogleMapComponent, _React$Component);

  function GoogleMapComponent(props) {
    _classCallCheck(this, GoogleMapComponent);

    return _possibleConstructorReturn(this, (GoogleMapComponent.__proto__ || Object.getPrototypeOf(GoogleMapComponent)).call(this, props));
  }

  _createClass(GoogleMapComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var directionsDisplay;
      var directionsService;
      var infoWindow;
      var map;
      var mapID = "mapDiv" + this.props.nMap;
      var mapDiv = document.getElementById(mapID);
      var mapOptions = {
        center: {
          lat: -34.397,
          lng: 150.644
        },
        zoom: 8
      };

      // will not render without setting these css parameters
      mapDiv.style["height"] = "50%";
      mapDiv.style["width"] = "50%";
      mapDiv.style["position"] = "absolute";
      // -------------------
      mapDiv.style["margin"] = "5% 0% 5% 10%";

      map = new google.maps.Map(document.getElementById(mapID), mapOptions);
      directionsDisplay = new google.maps.DirectionsRenderer();
      directionsService = new google.maps.DirectionsService();
      infoWindow = new google.maps.InfoWindow({ map: map });

      // Sat Jan 07 2017 19:21:33 GMT-0800 (PST)
      var date = Date();
      var travelMode = 'DRIVING' || this.props.travelMode;

      var request = {
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: travelMode,
        transitOptions: {
          arrivalTime: this.props.arrivalTime,
          departureTime: this.props.departureTime
        }
      };
      directionsService.route(request, function (result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      });

      directionsDisplay.setMap(map);
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'mapDiv' + this.props.nMap },
          'Google Maps'
        )
      );
    }
  }]);

  return GoogleMapComponent;
}(_react2.default.Component);

// Usage: 
// <GoogleMapComponent nMap={1}/>
// nMap is used incase you need multiple maps. the component will generate a new div id by 
// concatinating the value of nMap to a string; @example: "mapDiv" + 1;  


exports.default = GoogleMapComponent;
