import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function GemCards(props) {
  return (
    <div className="gemContainer">
   
    <ul className="list-group gem-results">
      {props.results.map(result => (
        <li key={result.id} 
        className="list-group-item collection">
            <card>
                <img src = {result.photos} alt = {props.placeName}/>
                <h3>
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
            </card>         
        </li>
      ))}
    </ul>
    </div>
  );
}

export default GemCards;
