import React, { Fragment } from "react";
import { FaSearchLocation } from "react-icons/fa";

const RedoSearch = ({ areSurroundMarkers, getSurroundMarkers }) => {
  const handleOnClick = () => {};
  return (
    <Fragment>
      {!areSurroundMarkers ? (
        <div className="RedoSearch_Wrapper">
          <button className="RedoSearch_Button" onClick={getSurroundMarkers}>
            <FaSearchLocation /> search in this area
          </button>
        </div>
      ) : null}
    </Fragment>
  );
};
export default RedoSearch;
