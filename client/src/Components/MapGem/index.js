import React, { Fragment, useState } from "react";
import "./mapgem.css";
import Spinner from "../Spinner";
function SideGem({
  isMarkerClicked,
  data: { photos, placeName, description, _id }
}) {
  return (
    <Fragment>
      <div className={`gemCard ${isMarkerClicked ? "card-active" : ""}`}>
        <div className="card">
          {!isMarkerClicked ? (
            <Fragment>
              <Spinner />
            </Fragment>
          ) : (
            <Fragment>
              <img src={photos} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{placeName}</h5>
                <p className="card-text">{description}</p>
                <div className="btn-div" style={{ textAlign: "center" }}>
                  <Link to={`/gem/${_id}`} className="btn-learnmore">
                    Read More
                  </Link>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
export default SideGem;
