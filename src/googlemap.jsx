import React, { Component } from 'react';
import MapService from './mapService';

class GoogleMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }
  componentDidMount() {    
    let infoWindow;
    let map;
    let mapID = "mapDiv" + this.props.nMap;
    
    map = new google.maps.Map(document.getElementById(mapID), this.props.mapOptions);
    infoWindow = new google.maps.InfoWindow({map: map});    
    this.props.routeService(map, this.state.request);
    this.setState({newMap: map});
  }

  handleRoute(e) {    
    e.preventDefault();
    // async behavior causing map to update only on second click
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
    })
    this.props.routeService(this.state.newMap, this.state.request);
  }

  render() {
    const style = { height: "50%", width: "50%", position: "absolute", margin: "5% 0% 5% 10%" };

    return (
      <div className="container-map">
        <div className="map" style={style} id={`mapDiv${this.props.nMap}`}>Google Maps</div>
        <form action="" onSubmit={(e)=>{this.handleRoute(e)}}>
          <input type="text" placeholder="origin"/>
          <input type="text" placeholder="destination"/>
          <button 
            type="submit"
            className="get-map-directions">
            directions
            </button>
        </form>
      </div>
    );
  }
}

export default MapService(GoogleMapComponent);
