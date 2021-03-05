import React, { useContext } from "react";
import SidebarChatItem from "./SidebarChatItem";
import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../context/auth/AuthContext";

const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  const { users } = chatState;
  const { uid } = auth;

  return (
    <div className="inbox_chat">
      {users
        .filter((user) => user.uid !== uid)
        .map((user) => (
          <SidebarChatItem key={user.uid} user={user} />
        ))}
      {/*                     <!-- Espacio extra para scroll -->
       */}{" "}
      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
