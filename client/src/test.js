import React from "react";
import OverLayView from "./Components/OverLayView";

export default function Test() {
  return (
    <div>
      <div id="wrapper">
        <div class="sidebar">
          <div class="profile-img">
            <img src="http://muhammederdem.com.tr/imagesrdm/profile.jpg" />
          </div>

          <ul class="sidebar-menu">
            <li>
              <a href="#" class="sidebar-menu__links active">
                <img src="http://muhammederdem.com.tr/sms/img/inbox.png" />
              </a>
            </li>
            <li>
              <a href="#" class="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/send.png" />
              </a>
            </li>
            <li>
              <a href="#" class="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/draft.png" />
              </a>
            </li>
            <li>
              <a href="#" class="sidebar-menu__links">
                <img src="http://muhammederdem.com.tr/sms/img/trash.png" />
              </a>
            </li>
          </ul>

          <a href="#" class="btn-menu">
            <img src="img/menu.png" />
          </a>
        </div>

        <div class="messages">
          <div class="seacrh-bar">
            <img src="img/search.png" />
            <input type="text" placeholder="Search" />
          </div>

          <a href="#" class="messages__item">
            <div class="name">Muhammed ERDEM</div>
            <div class="date">1h ago</div>

            <div class="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" class="messages__item unread">
            <div class="name">Muhammed ERDEM</div>
            <div class="date">1h ago</div>

            <div class="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" class="messages__item">
            <div class="name">Muhammed ERDEM</div>
            <div class="date">1h ago</div>

            <div class="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" class="messages__item">
            <div class="name">Muhammed ERDEM</div>
            <div class="date">1h ago</div>

            <div class="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>

          <a href="#" class="messages__item active">
            <div class="name">Muhammed ERDEM</div>
            <div class="date">1h ago</div>

            <div class="content">
              Currently We are looking for a UI designer to work on our websites
              and mobile application...
            </div>
          </a>
        </div>

        <div class="message-content">
          <div class="message-content__item">
            <div class="message-content-header">
              <div class="name">Muhammed ERDEM</div>
              <div class="phone">+90 507 047 3099</div>
              <img src="img/message-more.png" />
            </div>
          </div>

          <div class="message-box">
            <div class="message-box__item incoming">
              <div class="name">Muhammed ERDEM</div>

              <div class="box-text">
                Hey man!
                <div class="time">18:36</div>
              </div>
            </div>

            <div class="message-box__item outgoing">
              <div class="box-text">
                Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                metinlerdir
                <div class="time">18:36</div>
              </div>
            </div>

            <div class="message-box__item outgoing">
              <div class="box-text">
                Currently We are looking for a UI designer to work on our
                websites and mobile application.
                <div class="time">18:36</div>
              </div>
            </div>

            <div class="message-box__item incoming">
              <div class="name">Muhammed ERDEM</div>

              <div class="box-text">
                Currently We are looking
                <div class="time">18:36</div>
              </div>
            </div>
          </div>

          <div class="message-form">
            <input type="text" placeholder="Type your message here" />
            <img src="img/submit.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
