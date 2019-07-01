import React, { Fragment } from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

function FormGroup({
  placeName,
  isUploaded,
  photos,
  category,
  progress,
  description,
  handleOnChange,
  handleOnClick,
  handleFileChange,
  handleOnFormClose
}) {
  return (
    <Consumer>
      {value => {
        const { loading, isAuthenticated } = value;
        return (
          <Fragment>
            {loading ? (
              <Spinner />
            ) : isAuthenticated ? (
              <Fragment>
                <h5 className="FormGroup-header">Add Gem</h5>
                <span
                  className="x_btn FormGroup-top-x"
                  style={{ cursor: "pointer" }}
                  onClick={handleOnFormClose}
                >
                  <i className="far fa-times-circle" />
                </span>
                <div className="FormGroup-input-container">
                  <input
                    className="FormGroup-input"
                    name="placeName"
                    placeholder="Title"
                    value={placeName}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="FormGroup-input-container upload-btn-wrapper">
                  <input
                    type="file"
                    className="FormGroup-file_input"
                    name="photos"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="photos" className="FormGroup-file_input">
                    Upload Image
                  </label>
                </div>
                {progress ? (
                  <div className="FormGroup-progress-bar-container">
                    <p
                      className="FormGroup-progress-bar"
                      style={{ width: `${parseInt(progress)}%` }}
                    />
                    <small> {parseInt(progress) + "%"}</small>
                  </div>
                ) : null}
                {isUploaded ? (
                  <div className="FormGroup-img-container">
                    <img className="FormGroup-img" src={photos} alt="..." />
                  </div>
                ) : null}
                <div className="FormGroup-input-container">
                  <select
                    className="FormGroup-input FormGroup-dropdown"
                    name="category"
                    value={category}
                    onChange={handleOnChange}
                  >
                    <option value="" />
                    <option value="auto">Auto</option>
                    <option value="bars">Bar</option>
                    <option value="coffeeshop">Coffee Shop</option>
                    <option value="reacreationalarea">Recreational Area</option>
                    <option value="restaurants">Restaurant</option>
                    <option value="park">Park</option>
                    <option value="specialist">Specialist</option>
                  </select>
                </div>
                <div className="FormGroup-input-container">
                  <textarea
                    className="FormGroup-input FormGroup-textarea"
                    name="description"
                    placeholder=" Story, Description ..."
                    value={description}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="submit-container">
                  <input
                    type="submit"
                    className="create-btn"
                    value="Create Place"
                    disabled={!isUploaded}
                    onClick={handleOnClick}
                  />
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <h5>
                  Place Details
                  <span className="x_btn" style={{ cursor: "pointer" }}>
                    <small>X</small>
                  </span>
                </h5>
                <div>
                  <p style={{ textAlign: "center" }}>
                    You are not logged in. Please <Link to="/login">login</Link>{" "}
                    or <Link to="/signup">sign up</Link> to create place.
                  </p>
                </div>
              </Fragment>
            )}
          </Fragment>
        );
      }}
    </Consumer>
  );
}

export default FormGroup;
