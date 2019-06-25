import React from "react";

const Banner = props => {
  return (
    <div className="Banner">
      <div className="Banner_img_box">
        <img className="Banner_image" alt="Gem" src={props.image} />
      </div>
    </div>
  );
};

export default Banner;
