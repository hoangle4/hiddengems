import React from "react";

function Story(props) {
  return (
    <div className="storyBox">
      <div className="gemStory">
        <h1>{props.title}</h1>     
        <p>{props.story}</p>
      </div>
    </div>
  );
}

export default Story;
