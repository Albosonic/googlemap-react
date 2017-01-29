import React from 'react';

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

  appendStyle() {
    var head  = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = "../styles/styles.css";
    link.media = 'all';
    head.appendChild(link);
  }

  render() {
    return(
     <ComposedComponent 
      routeService={ this.routeService.bind(this) } 
      appendStyle={ this.appendStyle.bind(this) } />
      )
  }
};

export default MapService;