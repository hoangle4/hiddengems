import React from "react";
import { Link } from "react-router-dom";

const Chip = ({ author: { firstName, lastName, avatar, _id } }) => {
  return (
    <div className="Story_chip">
      <Link to={`/user/${_id}`}>
        <img className="Story_chip_head" src={avatar} alt={firstName} />
      </Link>
      <Link to={`/user/${_id}`}>
        <div className="Story_chip_content">
          {firstName} {lastName}
        </div>
      </Link>
    </div>
  );
};

export default Chip;
