import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import ChatSelect from "../components/ChatSelect";
import "../css/chat.css";

const ChatPage = () => {
  const { chatState } = useContext(ChatContext);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {chatState.activeChat ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};

export default ChatPage;
