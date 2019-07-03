import React, { useState, useEffect } from "react";
import userDB from "../../API/userDB";
import DropBox from "./DropBox";

export default function MsgContent() {
  const [receiverID, setReceiverID] = useState("");
  const [msg, setMsg] = useState("");
  const handleSendMsg = async () => {
    const result = await userDB.sendMsg(receiverID, msg);
    console.log(result);
  };
  return (
    <div className="Messages_msg_content">
      <div className="Msg_message-content__item">
        <div className="Msg_message-content-header">
          <DropBox getReceiverID={receiverID => setReceiverID(receiverID)} />
        </div>
      </div>
      <div className="Msg_message-box ">
        <div className="Msg_message-box_item incoming">
          <div className="Msg_name">Muhammed ERDEM</div>

          <div className="Msg_box-text">
            Hey man!
            <div className="Msg_time">18:36</div>
          </div>
        </div>

        <div className="Msg_message-box_item  outgoing">
          <div className="Msg_box-text">
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir
            <div className="Msg_time">18:36</div>
          </div>
        </div>

        <div className="Msg_message-box_item  outgoing">
          <div className="Msg_box-text">
            Currently We are looking for a UI designer to work on our websites
            and mobile application.
            <div className="Msg_time">18:36</div>
          </div>
        </div>

        <div className="Msg_message-box_item  incoming">
          <div className="Msg_name">Muhammed ERDEM</div>

          <div className="Msg_box-text">
            Currently We are looking
            <div className="Msg_time">18:36</div>
          </div>
        </div>
      </div>
      <div className="Msg_message-form">
        <div className="Msg_send_form_wrap">
          <input
            type="text"
            placeholder="Type your message here"
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
          <i className="fas fa-paper-plane" onClick={handleSendMsg} />
        </div>
      </div>
    </div>
  );
}
