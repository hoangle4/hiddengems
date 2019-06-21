import React from "react";

function Story(props) {
  return (
    <div className="storyBox">
      <div className="gemStory">
        <h1>{props.title}</h1>     
        <pre>{props.story}</pre>
      </div>
    </div>
  );
}

export default Story;
