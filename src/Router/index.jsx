import React, { useContext, useEffect } from "react";
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
import ListMyJobs from "../Pages/ListMyJobs";
import PostJobsPg from "../Pages/PostJobsPg";
import SingleJobPg from "../Pages/SingleJobPg";
import { useNavigate, useLocation } from "react-router-dom";
import NotFoundPg from "../Pages/NotFoundPg";

const RedirectLoader = ({ navigate }) => {
  setTimeout(() => {
    navigate("/jobs");
  }, 1000);
  return (
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
  );
};

const Router = ({ matches }) => {
  const { token, auth } = useContext(AuthContext);
  const { user, profile, jobs, myPostedJobs } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const routerRender = () => {
    if (!auth) {
      return (
        <>
          <Route index path="/" element={<Landing matches={matches} />} />
          <Route path="/signin" element={<SignInPg />} />
          <Route path="/signup" element={<SignUpPg />} />
          <Route path="*" element={<NotFoundPg />} />
        </>
      );
    } else {
      if (!user) {
        return (
          <>
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
            <Route path="*" element={<NotFoundPg />} />
          </>
        );
      } else {
        if (profile) {
          return (
            <>
              <Route index path="/" element={<ListJobs matches={matches} />} />
              <Route
                path="/job"
                element={<RedirectLoader navigate={navigate} />}
              />
              <Route
                path="job/:slug"
                element={
                  jobs ? (
                    <SingleJobPg matches={matches} />
                  ) : (
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
                  )
                }
              />
              <Route path="/jobs">
                <Route index element={<ListJobs matches={matches} />} />
                {profile?.role === "Employer" ? (
                  <>
                    <Route
                      path="post"
                      element={<PostJobsPg matches={matches} />}
                    />
                    <Route
                      path="posted"
                      element={
                        myPostedJobs ? (
                          <ListMyJobs matches={matches} />
                        ) : (
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
                        )
                      }
                    />
                  </>
                ) : null}
              </Route>
              <Route path="*" element={<NotFoundPg />} />
            </>
          );
        } else {
          return (
            <>
              {" "}
              <Route index path="/" element={<CreateProfile />} />
              <Route path="*" element={<NotFoundPg />} />
            </>
          );
        }
      }
    }
  };
  return <Routes>{routerRender()}</Routes>;
};

export default Router;
