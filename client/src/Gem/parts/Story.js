import React from "react";
import moment from "moment";
import Chip from "./Chip";

const Story = ({ story: { description, placeName }, author }) => {
  return (
    <div className="Story_box">
      <div className="Story_box_container">
        <h1 className="Story_h1">{placeName}</h1>
        <p className="Story_p">{description}</p>
        <Chip author={author} />
      </div>
    </div>
  );
};

export default Story;
