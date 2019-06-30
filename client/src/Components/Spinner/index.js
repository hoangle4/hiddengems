import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import spinner from "./spinner.gif";

const Spinner = ({ onLoad }) => {
  return (
    <Fragment>
      <img
        onLoad={onLoad}
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block", zIndex: 99 }}
        alt="Loading..."
      />
    </Fragment>
  );
};
export default Spinner;
