import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { requestWithToken } from "../helpers/requests";
import chatTypes from "../types/chat/chat";

const SidebarChatItem = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { activeChat } = chatState;

  const onClick = async () => {
    dispatch({
      type: chatTypes.ACTIVE_CHAT,
      payload: user.uid,
    });

    const response = await requestWithToken(`messages/${user.uid}`);
    dispatch({
      type: chatTypes.LOAD_MESSAGES,
      payload: response.messages,
    });
  };

  return (
    <div
      className={`chat_list ${user.uid === activeChat && "active_chat"}`}
      onClick={onClick}
    >
      {/* activechat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarChatItem;
