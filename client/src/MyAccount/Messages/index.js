import React from "react";
import MsgSideBar from "./MsgSideBar";
import MsgMidMsg from "./MsgMidMsg";
import MsgContent from "./MsgContent";
import "../msg.css";

export default function Messages() {
  return (
    <div className="Messages_container">
      <div className="Messages_header">
        <div className="Messages_title">Messages</div>
      </div>
      <div className="Messages_main">
        <MsgSideBar />
        <MsgMidMsg />
        <MsgContent />
      </div>
    </div>
  );
}
