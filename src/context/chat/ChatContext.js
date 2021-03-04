import React, { useReducer, createContext } from "react";
import { chatReducer } from "../../reducers/chat";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  activeChat: null, //uid del user al que le enviaré el msj
  users: [], // todos los users de la db
  messages: [], // Msj del chat seleccionado
};

const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);
  
  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
