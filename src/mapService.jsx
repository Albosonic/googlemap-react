import React from 'react';
import ReactDom from 'react-dom';

export var MapService = ComposedComponent => class extends React.Component {

  constructor(props) {
    super(props);
    
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer(); 
  }

  routeService(map, request) {  
    this.directionsDisplay.setMap(map); 

    return new Promise((resolve, reject)=>{
      this.directionsService.route(request, (result, status) => {
        if (status === 'OK') {        
          resolve(result.routes[0].legs[0].steps);  
          this.directionsDisplay.setDirections(result);        
        } else {
          reject(status);
        }
      })      
    })    
  }

  render() {
    return <ComposedComponent routeService={this.routeService.bind(this)} />
  }
};

export default MapService;