import React, { Fragment } from "react";

function FormGroup({
  placeName,
  isUploaded,
  photos,
  category,
  progress,
  description,
  handleOnChange,
  handleOnClick,
  handleFileChange
}) {
  return (
    <Fragment>
      <h5>Place Details</h5>
      <div className="input-container">
        <label className="label" htmlFor="placeName">
          Place Name
        </label>
        <input
          className="input"
          name="placeName"
          placeholder="Place name"
          value={placeName}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-container upload-btn-wrapper">
        <label className="label" htmlFor="photos">
          Photos
        </label>
        <button id="upload-file-btn">
          <i className="far fa-edit" /> Profile photo
        </button>
        <input
          type="file"
          className="input"
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
      <div className="input-container">
        <label className="label" htmlFor="category">
          Category
        </label>
        <select
          className="input"
          name="category"
          value={category}
          onChange={handleOnChange}
        >
          <option value="restaurants">Restaurants</option>
          <option value="auto">Auto</option>
          <option value="bars">Bars</option>
          <option value="reacreationalarea">Recreational Area</option>
        </select>
      </div>
      <div className="input-container">
        <label className="label" htmlFor="description">
          Description
        </label>
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
          value="Create Place"
          disabled={!isUploaded}
          onClick={handleOnClick}
        />
      </div>
    </Fragment>
  );
}

export default FormGroup;
