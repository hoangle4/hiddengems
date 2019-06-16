import React from "react";

function Banner(props) {
  return (
    <div className="gemBanner">
      <img 
        alt='Gem' 
        src={props.image} 
      />
    </div>
  );
}

export default Banner;
