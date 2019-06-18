import React from "react";
import "./mapgem.css";
export default function index({
  isMarkerClicked,
  data: { photos, placeName, description, _id }
}) {
  return (
    <div
      style={isMarkerClicked ? { display: "block" } : { display: "none" }}
      className="col-md-3 p-0"
      id="gemCard"
    >
      <div className="card p-3" style={{ height: "100vh" }}>
        <img src={photos} className="card-img-top" alt="..." />
        <div className="card-body p-0">
          <h5 className="card-title">{placeName}</h5>
          <p className="card-text">{description}</p>
          <a href={`/gem/${_id}`} className="btn btn-danger">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
