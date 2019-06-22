/*global google*/
import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
  StreetViewPanorama
} from "react-google-maps";
const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2)
});
const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=${
      process.env.REACT_APP_GOOGLE_MAP_API
    }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        position: null,
        onMarkerMounted: ref => {
          refs.marker = ref;
        },

        onPositionChanged: () => {
          const lat = refs.marker.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.data.map.streetView.position.lat();
          const lng = refs.marker.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.data.map.streetView.position.lng();
          console.log(lat, lng);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 45.4213469, lng: -122.5467839 }}
  >
    <StreetViewPanorama
      position={{ lat: 45.4213469, lng: -122.5467839 }}
      visible={true}
      ref={props.onMarkerMounted}
      onPositionChanged={props.onPositionChanged}
    />
  </GoogleMap>
));

class MyParentComponentWrapper extends React.PureComponent {
  render() {
    return (
      <div>
        <MyMapComponent />
      </div>
    );
  }
}

export default MyParentComponentWrapper;
