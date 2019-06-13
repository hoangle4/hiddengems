import React from "react";
import "./mapforms.css";
function index({ isPinDropped }) {
  return (
    <div
      className="form-group"
      style={isPinDropped ? { display: "block" } : { display: "none" }}
    >
      <h5>Place Details</h5>
      <div className="input-container">
        <label className="label" htmlFor="placeName">
          Place Name
        </label>
        <input className="input" name="placeName" placeholder="" />
      </div>
      <div className="input-container">
        <label className="label" htmlFor="category">
          Category
        </label>
        <select className="input" name="category">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="input-container">
        <label className="label" htmlFor="placeName">
          Place Name
        </label>
        <input className="input" name="placeName" placeholder="" />
      </div>
      <div className="input-container">
        <label className="label" htmlFor="placeName">
          Place Name
        </label>
        <input className="input" name="placeName" placeholder="" />
      </div>
      <div className="input-container">
        <label className="label" htmlFor="placeName">
          Place Name
        </label>
        <input className="input" name="placeName" placeholder="" />
      </div>
    </div>
  );
}

export default index;
