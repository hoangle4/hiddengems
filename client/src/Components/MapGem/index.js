import React, { Fragment } from "react";
import "./mapgem.css";
import spinner from "./3534734.gif";
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
          {isMarkerData && photos !== "" ? (
            <Fragment>
              <img src={photos} className="card-img-top" alt="..." />
              <div className="card-body p-0">
                <h5 className="card-title">{placeName}</h5>
                <p className="card-text">{description}</p>
                <a href={`/gem/${_id}`} className="btn btn-danger">
                  Read More
                </a>
              </div>
            </Fragment>
          ) : (
            <img src={spinner} className="img-thumbnail" alt="..." />
          )}
        </div>
      </div>
    </Fragment>
  );
}
