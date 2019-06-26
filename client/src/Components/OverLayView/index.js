import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const OverLayView = ({
  data: { dateCreated, description, photos, placeName, distance, _id }
}) => {
  return (
    <Fragment>
      <div
        style={{
          width: `${250 - distance / 2}px`,
          color: "#f2f2f2",
          background: "rgba(34,34,34,.6)"
        }}
      >
        <article
          style={{
            border: "1px solid #ccc",
            boxShadow: "2px 2px 6px 0px  rgba(0,0,0,0.3)"
          }}
          // onClick={() => props.onMarkerClick(position._id)}
        >
          <img style={{ maxWidth: "100%" }} src={photos} />
          <div style={{ padding: " 0 20px 20px" }}>
            <h3>{placeName}</h3>
            <p>{description}</p>
            <a
              href={`/gem/${_id}`}
              style={{
                background: "gray",
                border: "0",
                color: "white",
                padding: "10px",
                width: "100%"
              }}
            >
              Read more
            </a>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default OverLayView;
