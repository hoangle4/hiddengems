import React, { useState, useEffect } from "react";
import userDB from "../API/userDB";

const Setting = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cityState, setCityState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress(user.address);
    setCityState(user.cityState);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setAvatar(user.avatar);
  }, []);

  const updateUserInfo = async event => {
    event.preventDefault();
    const result = await userDB.updateUserInfo({
      user: {
        firstName,
        lastName,
        address,
        cityState,
        phoneNumber
      }
    });
    console.log(result.data.address);
    setFirstName(result.data.firstName);
    setLastName(result.data.lastName);
    setAddress(result.data.address);
    setCityState(result.data.cityState);
    setEmail(result.data.email);
    setPhoneNumber(result.data.phoneNumber);
    setAvatar(result.data.avatar);
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
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Last Name</div>
            <input
              className="Setting_input"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Address</div>
            <input
              className="Setting_input"
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">City {`&`} State</div>
            <input
              className="Setting_input"
              type="text"
              value={cityState}
              onChange={e => setCityState(e.target.value)}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Email</div>
            <input
              className="Setting_input"
              type="text"
              value={email}
              disabled={true}
            />
          </div>
          <div className="Setting_item">
            <div className="Setting_text">Phone Number</div>
            <input
              className="Setting_input"
              type="text"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
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
