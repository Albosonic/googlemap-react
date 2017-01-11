import React from 'react';
import ReactDom from 'react-dom';

export var MapService = ComposedComponent => class extends React.Component {

  constructor(props) {
    super(props);
  }

  routeService(map, request) {
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();

   directionsService.route(request, (result, status) => {
     if (status === 'OK') {        
        directionsDisplay.setDirections(result)
     } else {
      console.log(status);
     }

   });

   directionsDisplay.setMap(map);
  }

  render() {
    // change this to start out with user location
    const mapOptions = {center: { lat: -34.397, lng: 150.644 }, zoom: 8};
    return <ComposedComponent       
      routeService={this.routeService} />
  }
};

export default MapService;