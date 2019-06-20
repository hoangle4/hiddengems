import React, { Fragment } from "react";
import "./mapgem.css";
import Spinner from "../Spinner";
export default function index({
  isMarkerClicked,
  isMarkerData,
  data: { photos, placeName, description, _id }
}) {
  return (
    <Fragment>
      <div
        style={isMarkerClicked ? { display: "block" } : { display: "none" }}
        className="col-md-3 p-0"
        id="gemCard"
      >
        <div className="card p-3" style={{ height: "100vh" }}>
          {isMarkerData ? (
            <Fragment>
              <img src={photos} className="card-img-top" alt="..." />
            </Fragment>
          ) : (
            <Spinner />
          )}
          <div className="card-body p-0">
            <h5 className="card-title">{placeName}</h5>
            <p className="card-text">{description}</p>
            <a href={`/gem/${_id}`} className="btn btn-danger">
              Read More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
