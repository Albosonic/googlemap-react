import React from 'react';
import ReactDOM from 'react-dom';

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
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
    }

    // will not render without setting these css parameters
    mapDiv.style["height"] = "50%";
    mapDiv.style["width"] = "50%";
    mapDiv.style["position"] = "absolute";
              // -------------------
    mapDiv.style["margin"] = "5% 0% 5% 10%";

    map = new google.maps.Map(document.getElementById(mapID), mapOptions);    
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    infoWindow = new google.maps.InfoWindow({map: map});

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
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
    
    directionsDisplay.setMap(map)  
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    }
  }

  render() {
    return (   
    <div>
      <div id={`mapDiv${this.props.nMap}`}>Google Maps</div>                  
    </div>   
    );
  }
}

// Usage: 
// <GoogleMapComponent nMap={1}/>
// nMap is used incase you need multiple maps. the component will generate a new div id by 
// concatinating the value of nMap to a string; @example: "mapDiv" + 1;  
export default GoogleMapComponent;