import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import Landing from "../Pages/Landing";
import SignInPg from "../Pages/SignInPg";
import SignUpPg from "../Pages/SignUpPg";
import Jobs from "../Components/Jobs";
import CreateProfile from "../Pages/CreateProfile";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
const Router = ({ matches }) => {
  const { token, auth } = useContext(AuthContext);
  const { user, profile } = useContext(DataContext);

  console.log(profile);

  const routerRender = () => {
    if (!auth) {
      console.log(1);
      return (
        <>
          <Route index path="/" element={<Landing matches={matches} />} />
          <Route path="/signin" element={<SignInPg />} />
          <Route path="/signup" element={<SignUpPg />} />
          {/* <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/jobs" element={<Jobs />} /> */}
        </>
      );
    } else {
      if (profile) {
        console.log(2);
        return <Route index path="/" element={<Jobs />} />;
      } else {
        return <Route index path="/" element={<CreateProfile />} />;
      }
    }
  };
  return <Routes>{routerRender()}</Routes>;
};

export default Router;
