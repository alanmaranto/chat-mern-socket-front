import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/auth/AuthContext";
import { SocketProvider } from "./context/socket/SocketContext";

const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
};

export default ChatApp;
