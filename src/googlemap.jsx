import React, { Component } from 'react';
import MapService from './MapService';
import Directions from './Directions';

class GoogleMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
    this.map;
  }

  componentDidMount() {        
    let mapID = "mapDiv" + this.props.nMap;                
    this.map = new google.maps.Map(document.getElementById(mapID));
    let infoWindow = new google.maps.InfoWindow({map: this.map});    
    this.props.routeService(this.map, this.state.request)
    .then((directions)=> this.setState({steps: directions}));        
  }

  handleRoute(e) {    
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
    },()=>this.props.routeService(this.map, this.state.request)
      .then((directions)=>this.setState({steps: directions})));
  }

  render() {
    const style = { height: "50%", width: "50%", position: "absolute", margin: "5% 0% 5% 10%" };
    return (
      <div>
        <div className="container-map">
          <div className="map" style={style} id={`mapDiv${this.props.nMap}`}>Google Maps</div>
          <form className="map-form" onSubmit={(e)=>{this.handleRoute(e)}}>
            <input className="map-input" type="text" placeholder="origin"/>
            <input className="map-input" type="text" placeholder="destination"/>
            <button 
              className="map-directions-button"
              type="submit">
              directions
              </button>
          </form>        
        </div>
          <Directions steps={this.state.steps} />    
      </div>                                                  
    );
  }
}

export default MapService(GoogleMapComponent);
