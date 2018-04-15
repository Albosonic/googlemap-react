import React, { Component } from 'react';
import MapService from './mapService';
import Directions from './Directions';
import Form from './Form';

class GoogleMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: {},
      request: {
        origin: '1 Frank H Ogawa Plaza, Oakland, CA 94612',
        destination: '1600 Pennsylvania Ave NW, Washington, DC 20500',
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
    this.props.appendStyle();
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
    const style = { height: "50%", width: "50%", position: "absolute" };
    return (
      <div className="container-package">
        <div className="container-map">
          <div className="map" style={style} id={`mapDiv${this.props.nMap}`}>Google Maps</div>
        </div>
        <div className="container-info">
          <Form className="form" handleRoute={ this.handleRoute.bind(this) } />
          <Directions steps={this.state.steps} />
        </div>
      </div>
    );
  }
}

export default MapService(GoogleMapComponent);
