import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import Landing from "../Pages/Landing";
import SignInPg from "../Pages/SignInPg";
import SignUpPg from "../Pages/SignUpPg";
import Jobs from "../Components/Jobs";
import CreateProfile from "../Pages/CreateProfile";
import { AuthContext } from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import ListJobs from "../Pages/ListJobs";
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
          console.log(2);
          return (
            <Route index path="/" element={<ListJobs matches={matches} />} />
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
