import React, { createContext, useCallback, useState, useContext } from "react";
import { requestWithoutToken, requestWithToken } from "../../helpers/requests";
import chatTypes from "../../types/chat/chat";
import { ChatContext } from "../chat/ChatContext";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const { dispatch } = useContext(ChatContext);

  const login = async (email, password) => {
    const response = await requestWithoutToken(
      "login",
      { email, password },
      "POST"
    );
    if (response.ok) {
      localStorage.setItem("token", response.token);

      const { user } = response;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }

    return response.ok;
  };

  const register = async (name, email, password) => {
    const response = await requestWithoutToken(
      "login/new",
      { name, email, password },
      "POST"
    );
    if (response.ok) {
      localStorage.setItem("token", response.token);

      const { user } = response;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
      return true;
    }
    return response.msg;
  };

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }

    const response = await requestWithToken("login/renew");

    if (response.ok) {
      localStorage.setItem("token", response.token);

      const { user } = response;
      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    dispatch({
      type: chatTypes.LOGOUT_USER,
    });

    setAuth({
      checking: false,
      logged: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
