import React from 'react';
import ReactDom from 'react-dom';

export var MapService = ComposedComponent => class extends React.Component {

  constructor(props) {
    super(props);
    // this.mapInit = this.mapInit.bind(this);    
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();          
  }

  routeService(map, request) {
    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        // cb(directionsDisplay.setDirections(result));
        this.directionsDisplay.setDirections(result)
      } else {
      console.log(status);
      }
    });

   this.directionsDisplay.setMap(map);
  }

  render() {
    // change this to start out with user location
    return <ComposedComponent       
      routeService={this.routeService.bind(this)} />
  }
};

export default MapService;