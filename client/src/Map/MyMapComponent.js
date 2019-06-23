import React, { Fragment } from "react";
import { compose, lifecycle, withProps } from "recompose";
import { FaPlus } from "react-icons/fa";
import Spinner from "../Components/Spinner";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  StreetViewPanorama,
  OverlayView
} from "react-google-maps";
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
        <StreetViewPanorama
          defaultPosition={{
            lat: props.currentLatitude,
            lng: props.currentLongitude
          }}
          visible
          ref={props.onPanoramaMounted}
          onPositionChanged={props.onPositionChanged}
        >
          {/* <button
            onClick={e => console.log(e)}
            draggable="false"
            title="Toggle fullscreen view"
            aria-label="Toggle fullscreen view"
            type="button"
            className="gm-control-active gm-fullscreen-control"
            style={{
              backGround: "none rgb(34, 34, 34)",
              border: "0px",
              margin: "10px",
              padding: "0px",
              position: "absolute",
              cursor: "pointer",
              userSelect: "none",
              borderRadius: "2px",
              height: "40px",
              width: "40px ",
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
              overflow: "hidden",
              top: " 0px",
              right: "0px",
              zIndex: 99
            }}
          >
            <FaPlus />
          </button> */}

          {props.mapMarkers[0] &&
            props.mapMarkers.map(position => (
              <OverlayView
                id={position._id}
                key={position._id}
                position={position.coordinates[0]}
                mapPaneName={OverlayView.OVERLAY_LAYER}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <a
                  style={{
                    background: `red`,
                    color: `white`,
                    padding: 5,
                    borderRadius: `50%`
                  }}
                  onClick={() => props.onMarkerClick(position._id)}
                >
                  OverlayView
                </a>
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
