import React from "react";

import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function GemCards(props) {
  return (
    <div className="gemContainer">
      {props.results.map(result => (
        <a key={result.id} 
        className="gemGroup">
            <div className = "gem">
                <img className = "cardImage" src = {result.photos} alt = {props.placeName}/>
                <h3 className = "gemName">
                    {result.placeName}
                </h3>
                <p>
                    {result.description}
                </p>
                <button type="submit" 
                    onClick={props.updateGem}
                    className="editBtn"
                    gemID={result.id}
                >Edit
                </button>
                <button type="submit" 
                    onClick={props.deleteGem}
                    className="deleteBtn"
                    gemID={result.id}
                >Delete
                </button>
            </div>         
        </a>
      ))}
    </div>
  );
}

export default GemCards;
