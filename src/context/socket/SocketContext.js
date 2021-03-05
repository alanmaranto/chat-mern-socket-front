import React, { useEffect, useContext } from "react";
import { createContext } from "react";
import { useSocket } from "../../hooks/socket/useSocket";
import { AuthContext } from "../../context/auth/AuthContext";
import { ChatContext } from "../../context/chat/ChatContext";
import chatTypes from "../../types/chat/chat";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  // Get connected users
  useEffect(() => {
    socket?.on("get-users", (users) => {
      dispatch({
        type: chatTypes.LOAD_USERS,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  // Get private message by uid
  useEffect(() => {
    socket?.on("private-message", (msg) => {
      console.log(msg);
      dispatch({
        type: chatTypes.NEW_MESSAGE,
        payload: msg
      })
      // Scroll to top
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
