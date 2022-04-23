import React from "react";
import { Route, Routes } from "react-router";
import Landing from "../Pages/Landing";
import SignInPg from "../Pages/SignInPg";
import SignUpPg from "../Pages/SignUpPg";
import CreateProfileForm from "../Components/CreateProfileForm"
import Jobs from "../Components/Jobs";
const Router = ({matches}) => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing matches={matches} />} />
        <Route path="/signin" element={<SignInPg />} />
        <Route path="/signup" element={<SignUpPg />} />
        <Route path="/createprofile" element={<CreateProfileForm/>} />
        <Route path="/jobs" element={<Jobs/>} />
      </Routes>
    </>
  );
};

export default Router;
