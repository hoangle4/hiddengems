import React, { Fragment } from "react";

const Banner = ({ photos }) => {
  return (
    <div className="Banner">
      <div className="Banner_img_box">
        <img className="Banner_image" alt="Gem" src={photos} />
      </div>
    </div>
  );
};

export default Banner;
