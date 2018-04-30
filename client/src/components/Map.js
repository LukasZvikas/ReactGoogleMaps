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

class Map extends Component {
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        console.log("Result", result);
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          // console.log("STATE", this.state);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  renderMarkers() {
    const markers = this.props.markers;
    console.log(markers);

    return _.map(markers, marker => {});
  }

  render() {
    const markers = this.props.markers;
    console.log("STATE", this.state);

    if (this.state == null) {
      return <div>Loading... </div>;
    }
    return (
      <div>
        <div>This is map</div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
        >
          {this.state.directions && (
            <DirectionsRenderer directions={this.state.directions} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));
