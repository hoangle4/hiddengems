import React from "react";

function Story(props) {
  const author = "Added By: " + props.author.firstName + " " + props.author.lastName
  return (
    <div className="storyBox">
      <div className="gemStory">
        <h1>{props.title}</h1>
          <h3>{author}</h3>  
        <p>{props.story}</p>
      </div>
    </div>
  );
}

export default Story;
