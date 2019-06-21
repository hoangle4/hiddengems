import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function GemCards({ placeCreated }) {
  return (
    <div className="gemContainer">
      {placeCreated.map(place => (
        <a href={`/gem/${place._id}`} className="gemGroup">
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src={place.photos}
              alt={place.placeName}
            />
            <h3>{place.placeName}</h3>
            <p>{place.description}</p>
            <button type="submit" className="editBtn" id={place._id}>
              Edit
            </button>
            <button type="submit" className="deleteBtn" id={place._id}>
              Delete
            </button>
          </div>
        </a>
      ))}
    </div>
  );
}

export default GemCards;
