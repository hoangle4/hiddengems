import React from "react";

function Banner(props) {
  return (
    <div className="gemBanner">
      <img 
        alt='Gem' 
        src={props.photos} 
      />
    </div>
  );
}

export default Banner;
