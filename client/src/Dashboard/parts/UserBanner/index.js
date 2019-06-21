import React from "react";
import "./style.css"

function userBanner(props) {
  return (
    <div 
    className="userBanner"
    style = {{backgroundImage: 'URL('+props.background+')'}}
    >
      <img src={props.profile} alt='smallProfile' className='profileImage'/>
    </div>
  );
}

export default userBanner;