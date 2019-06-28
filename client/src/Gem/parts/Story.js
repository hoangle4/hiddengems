import React from "react";
import moment from "moment";
import Chip from "./Chip";

const Story = ({ story: { description, placeName }, author, photos }) => {
  return (
    <div className="Story_box">
      <div className="Story_box_container">
        <h1 className="Story_h1">{placeName}</h1>
        <div className="Story-sub-header">
          <Chip author={author} />
          <img className="Story_image" alt="Gem" src={photos} />
        </div>
        <div className="Story-textbox">
          <i className="fas fa-quote-left fa2"></i>
          <p className="Story_p">{description}</p>
          <i className="fas fa-quote-right fa1"></i>
        </div>
       
      </div>
      
    </div>
  );
};

export default Story;
