import React from "react";

export default function MsgMidMsg() {
  return (
    <div className="Msg_wrap_message">
      <div className="Msg_search-bar">
        <i className="fas fa-search" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="Messages_msg">
        <a className="Msg_a" href="#" className="Msg_messages_item">
          <div className="Msg_name">Muhammed ERDEM</div>
          <div className="Msg_date">1h ago</div>

          <div className="Msg_content">
            Currently We are looking for a UI designer to work on our websites
            and mobile application...
          </div>
        </a>
      </div>
    </div>
  );
}
