import React from "react";
import "./style.css";
import moment from "moment";

function userBanner({
  background,
  user: { avatar, dateCreated, firstName, lastName }
}) {
  return (
    <div
      className="userBanner"
      style={{ backgroundImage: `URL('${background}')` }}
    >
      <img src={avatar} alt="smallProfile" className="profileImage" />
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <small>
          Member Since: {moment(new Date(dateCreated)).format("MM/YYYY")}
        </small>
      </div>
    </div>
  );
}

export default userBanner;
