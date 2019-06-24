import React, { Fragment } from "react";
import { compose, lifecycle, withProps } from "recompose";
import { FaPlus } from "react-icons/fa";
import Spinner from "../Components/Spinner";
import ViewCard from "../Components/OverLayView";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  StreetViewPanorama,
  OverlayView
} from "react-google-maps";

import { mapBtn } from "./StyleMap.css";
const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2)
});

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${
      process.env.REACT_APP_GOOGLE_MAP_API
    }`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "100vh" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        position: null,
        onPanoramaMounted: ref => {
          refs.map = ref;
        },

        onPositionChanged: () => {
          const position =
            refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .streetView.position;
          console.log(position.lat(), position.lng());
        }
      });
    },
    componentDiMount() {
      this.setState({ comReady: true });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <Fragment>
    {typeof props.currentLatitude !== "number" &&
    typeof props.currentLongitude !== "number" &&
    props.comReady ? (
      <Spinner />
    ) : (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{
          lat: props.currentLatitude,
          lng: props.currentLongitude
        }}
        onClick={props.onMapClick}
      >
        <button
          onClick={e => console.log(e)}
          title="Add Story Here"
          style={mapBtn}
        >
          <FaPlus />
        </button>
        <StreetViewPanorama
          defaultPosition={{
            lat: props.currentLatitude,
            lng: props.currentLongitude
          }}
          visible
          ref={props.onPanoramaMounted}
          onPositionChanged={props.onPositionChanged}
        >
          {props.mapMarkers[0] &&
            props.mapMarkers.map(position => (
              <OverlayView
                id={position._id}
                key={position._id}
                position={position.coordinates[0]}
                mapPaneName={OverlayView.OVERLAY_LAYER}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <ViewCard
                  data={position}
                  onClick={() => props.onMarkerClick(position._id)}
                />
              </OverlayView>
            ))}
        </StreetViewPanorama>
        {props.isMarkerShown &&
          props.marker.map(position => (
            <Marker key={position} position={position} />
          ))}
        {props.mapMarkers[0] &&
          props.mapMarkers.map(position => (
            <Marker
              id={position._id}
              key={position._id}
              position={position.coordinates[0]}
              onClick={() => props.onMarkerClick(position._id)}
            />
          ))}
      </GoogleMap>
    )}
  </Fragment>
));

export const MyMap = ({
  currentLongitude,
  currentLatitude,
  isMarkerShown,
  onMarkerClick,
  onMapClick,
  marker,
  mapMarkers,
  handleViewPosition
}) => {
  console.log(currentLatitude);
  return (
    <MyMapComponent
      currentLongitude={currentLongitude}
      currentLatitude={currentLatitude}
      isMarkerShown={isMarkerShown}
      onMarkerClick={onMarkerClick}
      onMapClick={onMapClick}
      marker={marker}
      mapMarkers={mapMarkers}
      handleViewPosition={handleViewPosition}
    />
  );
};