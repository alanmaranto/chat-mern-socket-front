import React from "react";
import SidebarChatItem from "./SidebarChatItem";

const Sidebar = () => {
  const chats = [1, 2, 3, 4];
  return (
    <div className="inbox_chat">
      {chats.map((chat) => (
        <SidebarChatItem key={chat} />
      ))}
      {/*                     <!-- conversación inactiva inicio -->
       */}{" "}
      <div className="chat_list">
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />
          </div>
          <div className="chat_ib">
            <h5>
              Sunil Rajput <span class="chat_date">Dec 25</span>
            </h5>
            <p>
              Test, which is a new approach to have all solutions astrology
              under one roof.
            </p>
          </div>
        </div>
      </div>
      {/*                     <!-- conversación inactiva inicio -->
       */}
      {/*                     <!-- Espacio extra para scroll -->
       */}{" "}
      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
