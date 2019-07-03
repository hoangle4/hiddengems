import React, { useEffect, useState, Fragment } from "react";
import userDB from "../../API/userDB";
import "../dropbox.css";

const DropBox = ({ getReceiverID }) => {
  const ref = React.createRef();

  const [isVisible, setVisibility] = React.useState(false);
  const [selectUser, setSelectUser] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

  const fetchUsers = async () => {
    setLoading(true);
    const users = await userDB.getAllUser();
    if (!users) return;
    setLoading(false);
    setUsers(users.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onInputHandler = async e => {
    const value = e.target.value.toLowerCase();
    await setInputValue(value.trim());
    const user = await users.filter(u =>
      u.firstName.toLowerCase().includes(inputValue)
    );
    if (!user) return;
    setUser(user);
  };

  const closeList = () => setTimeout(() => setVisibility(false), 100);

  const onSelectHandler = user => {
    setSelectedUser(user);
    setVisibility(false);
    setSelectUser(true);
    getReceiverID(user._id);
  };

  const content = hasError ? (
    <p className="DBp">Error</p>
  ) : isLoading ? (
    <p className="DBp">Loading...</p>
  ) : (
    user.map(user => (
      <li className="DBli" key={user._id} onClick={() => onSelectHandler(user)}>
        <img className="DBimg" src={user.avatar} />
        <p className="p">
          {user.firstName} {user.lastName}
        </p>
      </li>
    ))
  );
  return (
    <Fragment>
      {!selectUser ? (
        <div className="DBwrapper" ref={ref}>
          <input
            className="DBinput"
            type="text"
            placeholder="search User"
            value={inputValue}
            onFocus={() => setVisibility(true)}
            onBlur={closeList}
            onChange={e => onInputHandler(e)}
          />
          {isVisible ? (
            <div className="DBlist">
              <ul className="DBul">{content}</ul>
            </div>
          ) : null}
        </div>
      ) : (
        <Fragment>
          <div className="Msg_name">
            {selectedUser.firstName} {selectedUser.lastName}
          </div>
          <div className="Msg_phone">{selectedUser.phoneNumber} </div>
          <i className="fas fa-angle-double-right" />
        </Fragment>
      )}
    </Fragment>
  );
};

export default DropBox;
