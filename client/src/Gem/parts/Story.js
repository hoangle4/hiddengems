import React from "react";

const Story = props => {
  const author =
    "Added By: " + props.author.firstName + " " + props.author.lastName;
  return (
    <div className="Story_box">
      <div className="Story_box_container">
        <h1 className="Story_h1">{props.title}</h1>
        <h3>{author}</h3>
        <p className="Story_p">{props.story}</p>
      </div>
    </div>
  );
};

export default Story;
