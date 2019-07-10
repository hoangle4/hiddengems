import React from "react";

export default function MsgSideBar() {
  return (
    <div className="Messages_SideBar">
      <div className="Msg_profile-img">
        <img src="https://picsum.photos/200" className="Messages_img" />
      </div>
      <ul className="Msg_ul">
        <li className="Msg_li">
          <a className="Msg_a" href="#">
            <i className="fas fa-inbox" />
          </a>
        </li>
        <li className="Msg_li">
          <a className="Msg_a" href="#">
            <i className="fas fa-paper-plane" />
          </a>
        </li>
        <li className="Msg_li">
          <a className="Msg_a" href="#">
            <i className="fas fa-file-word" />
          </a>
        </li>
        <li className="Msg_li">
          <a className="Msg_a" href="#">
            <i className="fas fa-trash-alt" />
          </a>
        </li>
        <li className="Msg_li">
          <a className="Msg_a" href="#">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
    </div>
  );
}
