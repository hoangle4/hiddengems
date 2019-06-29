import React, { Fragment } from "react";
import { compose, lifecycle, withProps } from "recompose";
import { FaPlus, FaStreetView } from "react-icons/fa";
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
import "./Map.css";

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
        onPanoramaMounted: ref => {
          refs.streetMap = ref;
        },
        onGoogleMapMounted: ref => {
          refs.staticMap = ref;
        },
        onPositionChanged: () => {
          const position =
            refs.streetMap.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .streetView.position;
          return {
            lat: position.lat(),
            lng: position.lng()
          };
        },
        getPositionOnDragEnd: () => {
          const boundsPosition = refs.staticMap.getBounds();
          const position = refs.staticMap.getCenter();
          return {
            bounds: {
              sw: { lat: boundsPosition.na.j, lng: boundsPosition.ga.j },
              ne: { lat: boundsPosition.na.l, lng: boundsPosition.ga.l }
            },
            lat: position.lat(),
            lng: position.lng()
          };
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
    {props.comReady ? (
      <Spinner />
    ) : (
      <GoogleMap
        ref={props.onGoogleMapMounted}
        defaultZoom={13}
        defaultCenter={props.latLng}
        onDragEnd={() => props.onDragEnd(props.getPositionOnDragEnd())}
      >
        <button
          onClick={props.handleAddStory}
          title="Add Story Here"
          id="MyMapComponent_add_btn"
        >
          <FaPlus />
        </button>
        <button
          onClick={props.handleStreetView}
          title="Street View"
          className="MyMapComponent_switch_btn"
        >
          <FaStreetView />
        </button>
        {props.isStreetView ? (
          <StreetViewPanorama
            defaultPosition={props.latLng}
            visible={props.isStreetView}
            ref={props.onPanoramaMounted}
            onPositionChanged={() =>
              props.handleViewPosition(props.onPositionChanged())
            }
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
                    handleViewPosition={props.handleViewPosition}
                  />
                </OverlayView>
              ))}
          </StreetViewPanorama>
        ) : (
          <img
            src="/pin_location.png"
            onClick={props.onCenterMapClick}
            className="MyMapComponent_pin_img"
          />
        )}

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
  latLng,
  isMarkerShown,
  onMarkerClick,
  onMapClick,
  marker,
  mapMarkers,
  handleViewPosition,
  handleAddStory,
  onDragEnd,
  isStreetView,
  handleStreetView,
  onCenterMapClick
}) => {
  return (
    <MyMapComponent
      latLng={latLng}
      isMarkerShown={isMarkerShown}
      onMarkerClick={onMarkerClick}
      onMapClick={onMapClick}
      marker={marker}
      mapMarkers={mapMarkers}
      handleViewPosition={handleViewPosition}
      handleAddStory={handleAddStory}
      onDragEnd={onDragEnd}
      isStreetView={isStreetView}
      handleStreetView={handleStreetView}
      onCenterMapClick={onCenterMapClick}
    />
  );
};
