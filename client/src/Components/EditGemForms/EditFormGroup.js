import React, { Fragment } from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

function FormGroup({
  value: { placeName, isUploaded, photos, category, progress, description },
  handleOnChange,
  handleOnClick,
  handleFileChange,
  closeForm
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
                <h5>Edit Gem</h5>
                <span
                  className="x_btn FormGroup-top-x"
                  style={{ cursor: "pointer" }}
                  onClick={closeForm}
                >
                  <i className="far fa-times-circle" />
                </span>
                <div className="FormGroup-input-container">
                  <input
                    className="input"
                    name="placeName"
                    placeholder="Place name"
                    value={placeName}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="FormGroup-input-container upload-btn-wrapper">
                  {/* <label className="label" htmlFor="photos">
                    Photos
                  </label> */}
                  <button id="upload-file-btn">
                    <i className="far fa-edit" /> Image
                  </button>
                  <input
                    type="file"
                    className="file_input"
                    name="photos"
                    onChange={handleFileChange}
                  />
                </div>
                {progress ? (
                  <div className="progress-bar-container">
                    <p
                      className="progress-bar"
                      style={{ width: `${parseInt(progress)}%` }}
                    />
                    <small> {parseInt(progress) + "%"}</small>
                  </div>
                ) : null}
                {isUploaded ? (
                  <div className="img-input-container">
                    <img src={photos} alt="..." />
                  </div>
                ) : null}
                <div className="FormGroup-input-container">
                  <select
                    className="input"
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
                    className="input"
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
                    value="Update Place"
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