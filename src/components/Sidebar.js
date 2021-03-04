import React, { useContext } from "react";
import SidebarChatItem from "./SidebarChatItem";
import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../context/auth/AuthContext";

const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  const { users } = chatState;
  const { uid } = auth

  return (
    <div className="inbox_chat">
      {users.filter((user) => user.uid !== uid).map((user) => (
        <SidebarChatItem key={user.uid} user={user} />
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
              Sunil Rajput <span className="chat_date">Dec 25</span>
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
