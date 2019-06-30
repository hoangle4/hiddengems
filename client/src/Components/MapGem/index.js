import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Truncate } from "../../Helper";
import Spinner from "../Spinner";
import "./style.css";
function SideGem({
  data: { photos, placeName, description, _id },
  handleCloseSideBar
}) {
  const [truncatedTitle, setTruncatedTitle] = useState("");
  const [truncatedDescription, setTruncatedDescription] = useState("");

  useEffect(() => {
    if (!placeName) return;
    setTruncatedTitle(Truncate(placeName, 30));
    if (!description) return;
    setTruncatedDescription(Truncate(description, 300));
  }, [placeName, description]);
  return (
    <Fragment>
      <ul className="MainMap_Sidenav">
        <li className="MapGem_Title_Li">
          <b>
            <Link className="MapGem_Title" to={`/gem/${_id}`}>
              {truncatedTitle}
            </Link>
          </b>
        </li>
        <li className="MapGem_Crop_Img">
          <img src={photos} className="MapGem_Img" alt="..." />
        </li>

        <li className="MapGem_Description">
          <b>{truncatedDescription}</b>
        </li>
        <li className="MapGem_Button_Li">
          <Link to={`/gem/${_id}`}>
            <i className="fa fa-book-reader" />
            <b>Read More</b>
          </Link>
        </li>
        <li className="MapGem_Button_Li">
          <a href="#" onClick={handleCloseSideBar}>
            <i className="fa fa-times" />
            <b>Close</b>
          </a>
        </li>
      </ul>
    </Fragment>
  );
}
export default SideGem;
