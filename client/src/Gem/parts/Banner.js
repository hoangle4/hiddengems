import React from "react";

function Banner(props) {
  return (
    <div className="gemBanner">
      <img className = "gemImage"
        alt='Gem' 
        src={props.image} 
      />
    </div>
  );
}

export default Banner;
