import React, { createContext, useCallback, useState } from "react";
import { fetchNoToken } from "../../helpers/fetch";

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

  const login = async (email, password) => {
    const response = await fetchNoToken('login', { email, password}, 'POST')
    console.log(response)
  };

  const register = (name, email, password) => {};

  const verifyToken = useCallback(async () => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
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
