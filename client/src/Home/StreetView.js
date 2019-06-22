/*global google*/
import React from "react";

const InitPano = props => {
  const Panorama = new google.maps.StreetViewPanorama(
    document.getElementById("root"),
    {
      position: props.defaultPosition,
      pov: {
        heading: 270,
        pitch: 0
      },
      visible: props.visible
    }
  );
  Panorama.addListener("position_changed", () => {
    const LatLng = Panorama.getPosition();
    console.log(LatLng);
    return LatLng;
  });
  return <div>{props.children}</div>;
};

export default InitPano;
