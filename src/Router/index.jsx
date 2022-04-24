import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import Landing from "../Pages/Landing";
import SignInPg from "../Pages/SignInPg";
import SignUpPg from "../Pages/SignUpPg";
import CreateProfile from "../Pages/CreateProfile";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import ListJobs from "../Pages/ListJobs";
import PostJobsPg from "../Pages/PostJobsPg";
const Router = ({ matches }) => {
  const { token, auth } = useContext(AuthContext);
  const { user, profile } = useContext(DataContext);

  const routerRender = () => {
    if (!auth) {
      return (
        <>
          <Route index path="/" element={<Landing matches={matches} />} />
          <Route path="/signin" element={<SignInPg />} />
          <Route path="/signup" element={<SignUpPg />} />
        </>
      );
    } else {
      if (!user) {
        return (
          <Route
            index
            path="/"
            element={
              <>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    height: "100vh",
                    width: "100vw",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              </>
            }
          />
        );
      } else {
        if (profile) {
          return (
            <>
              <Route index path="/" element={<ListJobs matches={matches} />} />
              <Route path="/jobs">
                <Route index element={<ListJobs matches={matches} />} />
                {profile?.role === "Employer" ? (
                  <Route
                    path="post"
                    element={<PostJobsPg matches={matches} />}
                  />
                ) : null}
              </Route>
            </>
          );
        } else {
          return <Route index path="/" element={<CreateProfile />} />;
        }
      }
    }
  };
  return <Routes>{routerRender()}</Routes>;
};

export default Router;
