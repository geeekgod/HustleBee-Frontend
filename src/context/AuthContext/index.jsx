import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  const [token, setToken] = useState(getToken());

  const authCheck = () => {
    if (token) return true;
    else return false;
  };
  const [auth, setAuth] = useState(authCheck());

  const authSuccess = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setToken(getToken());
      navigate("/");
    }
  };

  const authSignOut = () => {
    localStorage.clear();
    setToken(getToken());
    setTimeout(() => {
      navigate("/signin");
    }, 20);
  };

  useEffect(() => {
    setAuth(authCheck());
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, auth, authSuccess, authSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
