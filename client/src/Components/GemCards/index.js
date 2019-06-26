import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function GemCards({ placeCreated, user }) {
  const showCrud = (user._id === placeCreated[0].createdBy)
  console.log(showCrud);

  return (
    <div className="gemContainer">
      {placeCreated.map(place => (
        <a key={place._id} href={`/gem/${place._id}`} className="gemLink">
          <div className="gemBox">
            <img
              style={{ width: "200px", height: "200px" }}
              src={place.photos}
              alt={place.placeName}
            />
            <h3>{place.placeName}</h3>
            <p className="truncGem">{place.description}</p>
            {showCrud ? (
              <div>
                <button type="submit" className="editBtn" id={place._id}>Edit</button>
                <button type="submit" className="deleteBtn" id={place._id}>Delete</button>
              </div>
            ) : (
              <div></div>
            )}
            
          </div>
        </a>
      ))}
    </div>
  );
}

export default GemCards;
