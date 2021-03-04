import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/auth/AuthContext";
import ChatProvider from "./context/chat/ChatContext";
import { SocketProvider } from "./context/socket/SocketContext";

const ChatApp = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};

export default ChatApp;
