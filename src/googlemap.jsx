import React, { Component } from 'react';

class GoogleMapComponent extends Component {
  componentDidMount() {
    const directionsDisplay;
    const directionsService;
    let infoWindow;
    let map;
    const mapID = "mapDiv" + this.props.nMap;
    const mapOptions = {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    }

    map = new google.maps.Map(document.getElementById(mapID), mapOptions);
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    infoWindow = new google.maps.InfoWindow({map: map});

    const date = Date();
    const travelMode = this.props.travelMode || 'DRIVING';

    const request = {
       origin: this.props.origin,
       destination: this.props.destination,
       date: date,
       travelMode: travelMode,
       transitOptions: {
        arrivalTime: this.props.arrivalTime,
        departureTime: this.props.departureTime
       }
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(result);
      }
    });

    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, () => {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }

    const handleLocationError = ({browserHasGeolocation, infoWindow, pos}) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    }
  }

  render() {
    const style = {
      height: "50%",
      width: "50%",
      position: "absolute"
      margin: "5% 0% 5% 10%"
    }

    return (
      <div>
        <div style={style} id={`mapDiv${this.props.nMap}`}>Google Maps</div>
      </div>
    );
  }
}
// Usage:
// <GoogleMapComponent nMap={1}/>
// nMap is used incase you need multiple maps. the component will generate a new div id by
// concatinating the value of nMap to a string; @example: "mapDiv" + 1;
export default GoogleMapComponent;
