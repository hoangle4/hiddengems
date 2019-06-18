import React from "react";
import "./mapgem.css";
export default function index(props) {
  return (
    <div className="col-md-3 p-0" id="gemCard">
      <div className="card p-3" style={{ height: "100vh" }}>
        <img src={props.data.photos} className="card-img-top" alt="..." />
        <div className="card-body p-0">
          <h5 className="card-title">{props.data.placeName}</h5>
          <p className="card-text">{props.data.description}</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
