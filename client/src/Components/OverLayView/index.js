import React, { Fragment } from "react";
import "./style.css";
const OverLayView = ({
  data: {
    dateCreated,
    description,
    photos,
    placeName,
    distance,
    _id,
    coordinates
  },
  handleViewPosition
}) => {
  console.log(handleViewPosition);

  const changePosition = e => {
    e.preventDefault();
    handleViewPosition(coordinates[0]);
  };
  return (
    <Fragment>
      <div
        className="OverLayView_Container"
        style={{ width: `${167 - distance / 3}px` }}
      >
        <img className="OverLayView_Image" src={photos} />
        <div className="OverLayView_Content">
          <h3 className="OverLayView_H3">{placeName}</h3>
          <a
            href={`/gem/${_id}`}
            className="OverLayView_A"
            style={{ fontSize: `${25 - distance / 20}px` }}
          >
            Read more
          </a>
          <button
            style={{ fontSize: `${25 - distance / 20}px` }}
            className="OverLayView_Button"
            onClick={changePosition}
          >
            Go To
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default OverLayView;
