import React, { Component } from "react";
import blackMarker from "../images/blackMarker.png";
import Map from "./Map";

class MapRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: {
        lat: 51.5081134,
        lng: -0.1270003,
        text:
          "This is the starting point. From here go straight to the Golden Jubilee Bridge "
      },
      destination: {
        lat: 51.5131132,
        lng: -0.1611035,
        text:
          "Enjoy a walk across Oxford street and walk up until you reach Marble Arch"
      }
    };
  }
  render() {
    console.log(this.props);
    return (
      <div style={{ display: "flex", padding: "4.5rem" }}>
        <div style={{ flex: 1 }}>
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
        </div>
        <div style={{ flex: "0 0 60%" }}>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px"
            }}
          >
            {this.state.origin.text}
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px"
            }}
          >
            {this.state.destination.text}
          </div>
        </div>
      </div>
    );
  }
}

export default MapRenderer;
