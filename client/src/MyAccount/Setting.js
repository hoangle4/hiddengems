import React, { useState, useEffect } from "react";
import userDB from "../API/userDB";

const Setting = ({ user }) => {
  const [settingUser, UpdateUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cityState: "",
    email: "",
    phoneNumber: "",
    avatar: ""
  });

  useEffect(
    () =>
      UpdateUser({
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        cityState: user.cityState,
        email: user.email,
        phoneNumber: user.phoneNumber,
        avatar: user.avatar
      }),
    []
  );

  const updateUserInfo = async event => {
    event.preventDefault();
    const result = await userDB.updateUserInfo(settingUser);
    console.log(result);
  };
  return (
    <div className="Setting_container">
      <div className="Setting_header">
        <div className="Setting_title">Update Info</div>
      </div>
      <div className="Setting_main">
        <div className="Setting_left-section">
          <div className="Setting_item">
            <div className="Setting_text">First Name</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.firstName}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Last Name</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.lastName}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Address</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.address}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">City {`&`} State</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.cityState}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Email</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.email}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Phone Number</div>
            <input
              className="Setting_input"
              type="text"
              value={settingUser.phoneNumber}
            />
          </div>
        </div>
        <span className="Setting_line" />
        <div className="Setting_right-section">
          <div className="Setting_circle">
            <div className="Setting_img" />
          </div>
          <div className="Setting_link">
            <div className="Setting_title">Link your social media</div>
            <div className="Setting_icons Setting_fb">
              <div className="Setting_img" />
              <div className="connect" style={{ color: "#52E28C" }}>
                Connected
              </div>
            </div>
            <div className="Setting_icons Setting_twiter">
              <div className="Setting_img" />
              <a className="Setting_a" href="#">
                <div className="connect">Link</div>
              </a>
            </div>
            <div className="Setting_icons Setting_insta">
              <div className="Setting_img" />
              <a className="Setting_a" href="#">
                <div className="connect">Link</div>
              </a>
            </div>
          </div>
          <div className="Setting_btn">
            <button type="button" onClick={updateUserInfo}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
