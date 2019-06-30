import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spinner from "./spinner.gif";

const Spinner = ({ onLoad }) => {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 5000);
  }, []);

  return (
    <Fragment>
      <img
        onLoad={onLoad}
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block", zIndex: 99 }}
        alt="Loading..."
      />

      {!timer ? (
        <div style={{ textAlign: "center" }}>
          <h5>Not Authorized</h5>
          <p>
            You are not logged in. Please
            <Link to="/login">login</Link> or
            <Link to="/signup">sign up</Link> to create place.
          </p>
        </div>
      ) : null}
    </Fragment>
  );
};
export default Spinner;
