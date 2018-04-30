import React, { Component } from "react";
import Map from "./Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      origin: {lat: 40.6976684, lng: -74.260552},
      destination: {lat: 42.6976684, lng: -73.260552 }
    };
  }
  render() {
    console.log(this.props);
    return (
      <Map
        containerElement={
          <div
            style={{
              position: "absolute",
              width: "35%",
              height: "80%"
            }}
          />
        }
        mapElement={
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          />
        }
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        markers={{ lat: 40.6976684, lng: -74.260552 }}
        origin={this.state.origin} 
        destination={this.state.destination}
      />
    );
  }
}

export default App;
