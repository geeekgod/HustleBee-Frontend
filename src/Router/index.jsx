import React from "react";
import { Route, Routes } from "react-router";
import Landing from "../Pages/Landing";
import SignInPg from "../Pages/SignInPg";

const Router = ({matches}) => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing matches={matches} />} />
        <Route path="/signin" element={<SignInPg />} />{" "}
      </Routes>
    </>
  );
};

export default Router;
