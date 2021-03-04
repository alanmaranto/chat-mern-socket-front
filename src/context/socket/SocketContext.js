import React, { useEffect, useContext } from "react";
import { createContext } from "react";
import { useSocket } from "../../hooks/socket/useSocket";
import { AuthContext } from "../../context/auth/AuthContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);

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
      console.log('users',users);
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
