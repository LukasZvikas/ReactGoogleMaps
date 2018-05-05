/* global google */
import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";
import _ from "lodash";
import blackMarker from "../images/map-icon.png";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = { markerId: 1, markerId: 2 };
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    console.log("SERVICE", DirectionsService);

    DirectionsService.route(
      {
        origin: this.props.origin,
        waypoints: [
          {
            location: new google.maps.LatLng(51.5048632, -0.1197457)
          },
          {
            location: new google.maps.LatLng(51.5033031, -0.1895825)
          }
        ],
        destination: this.props.destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        console.log("Result", result);
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
    console.log("SERVICE2", DirectionsService);
  }

  render() {
    // const markers = this.props.markers;
    console.log("MAPS", google.maps.Map);

    if (this.state == null) {
      return <div>Loading... </div>;
    }

    // console.log("MARKERS", props.markers)
    return (
      <div style={{ display: "flex" }}>
        <div>
          <div>This is map</div>
          <GoogleMap
            defaultZoom={5}
            defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
          >
            {this.state.directions && (
              <DirectionsRenderer
                directions={this.state.directions}
                options={{
                  polylineOptions: {
                    stokeColor: "#FF0000",
                    strokeOpacity: 0.5,
                    strokeWeight: 4
                  },
                  markerOptions: { icon: blackMarker },
                  icon: { scale: 3 }
                }}
              />
            )}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap( Map));
