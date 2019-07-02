import React from "react";
import "./msg.css";

export default function Messages() {
  return (
    <div className="Messages_container">
      <div className="Messages_header">
        <div className="Messages_title">Messages</div>
      </div>
      <div className="Messages_main">
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
                Currently We are looking for a UI designer to work on our
                websites and mobile application...
              </div>
            </a>
          </div>
        </div>
        <div className="Messages_msg_content">
          <div className="Msg_message-content__item">
            <div className="Msg_message-content-header">
              <div className="Msg_name">Muhammed ERDEM</div>
              <div className="Msg_phone">+90 507 047 3099</div>
              <i className="fas fa-angle-double-right" />
            </div>
          </div>
          <div className="Msg_message-box ">
            <div className="Msg_message-box_item incoming">
              <div className="Msg_name">Muhammed ERDEM</div>

              <div className="Msg_box-text">
                Hey man!
                <p className="Msg_time">18:36</p>
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
                Currently We are looking for a UI designer to work on our
                websites and mobile application.
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
              <input type="text" placeholder="Type your message here" />
              <i className="fas fa-paper-plane" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
