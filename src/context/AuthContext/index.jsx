import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  const [token, setToken] = useState(getToken());

  const authCheck = useCallback(() => {
    if (token) return true;
    else return false;
  }, [token]);
  const [auth, setAuth] = useState(authCheck());

  const authSuccess = (token) => {
    if (token) {
      localStorage.setItem("token", token);
      setToken(getToken());
      navigate("/");
    }
  };

  const authSignOut = useCallback(() => {
    localStorage.clear();
    setToken(getToken());
    setTimeout(() => {
      navigate("/signin");
    }, 20);
  }, [navigate]);

  useEffect(() => {
    let authC = authCheck();
    setAuth(authC);
  }, [token, authCheck]);
  return (
    <AuthContext.Provider value={{ token, auth, authSuccess, authSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
