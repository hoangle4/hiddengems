import React, { useEffect, useState, Fragment } from "react";
import userDB from "../../API/userDB";
import "../dropbox.css";

const DropBox = () => {
  const ref = React.createRef();

  const [isVisible, setVisibility] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const fetchUsers = async () => {
    setLoading(true);
    const users = await userDB.getAllUser();
    if (!users) return;
    setLoading(false);

    setUsers(users.data);
  };

  const closeList = event => {
    console.log(ref.current);
    if (!ref.current.contains(event.target)) {
      // setVisibility(false);
      console.log("ha");
    }
  };
  useEffect(() => {
    fetchUsers();
    // document.addEventListener("click", closeList);
    // return () => document.removeEventListener("click", closeList);
  }, []);

  const onInputHandler = e => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const user = users.filter(user => user.firstName.includes(inputValue));
    if (!user) return;
    setUser(user);
  };

  const onSelectHandler = userName => {
    setInputValue(userName);
    setVisibility(false);
  };

  const content = hasError ? (
    <p className="DBp">Error</p>
  ) : isLoading ? (
    <p className="DBp">Loading...</p>
  ) : (
    users.map(user => (
      <li
        className="DBli"
        key={user._id}
        onClick={() => onSelectHandler(user._id)}
      >
        <img className="DBimg" src={user.avatar} />
        <p className="p">
          {user.firstName} {user.lastName}
        </p>
      </li>
    ))
  );
  console.log(user);
  return (
    <Fragment>
      <label htmlFor="user" className="DBlabel">
        User
      </label>
      <div className="DropBox_wrapper" ref={ref}>
        <input
          className="DBinput"
          type="text"
          placeholder="search"
          value={inputValue}
          onFocus={() => setVisibility(true)}
          onBlur={() => setVisibility(false)}
          onChange={e => onInputHandler(e)}
        />
        {isVisible ? (
          <div className="DBlist">
            <ul className="DBul">{content}</ul>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default DropBox;
