import React, { createContext, useContext, useEffect, useState } from "react";
import hustleBeeApi from "../../api/hustleBeeApi";
import { AuthContext } from "../AuthContext";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [profile, setProfile] = useState(null);
  const { token, authSignOut } = useContext(AuthContext);

  const getUser = () => {
    hustleBeeApi
      .get("/user", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "user found" && res.data.user) {
          setUser(res.data.user);
        }
      })
      .catch((err) => console.log(err));
  };

  const getProfile = () => {
    hustleBeeApi
      .get("/profile", { headers: { token: token } })
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "profile found" && res.data.profile) {
          setProfile(res.data.profile);
        }
      })
      .catch((err) => console.log(err));
  };

  const createProfile = (role, location, position) => {
    hustleBeeApi
      .post(
        "/create-profile",
        { role: role, location: location, position: position },
        { headers: { token: token } }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "Profile created sucessfully") {
          getProfile();
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProfile();
    getUser();
  }, [token]);
  return (
    <DataContext.Provider value={{ user, profile, createProfile }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
