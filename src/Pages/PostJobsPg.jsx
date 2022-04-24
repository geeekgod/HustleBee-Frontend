import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const NavbarAfter = React.lazy(() => import("../Components/BeforeLogin/Navbar/NavbarAfter"));
const PostJobs = React.lazy(() => import("../Components/PostJobs"));
const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer"));

const PostJobsPg = ({ matches }) => {
  return (
    <>
      <Suspense
        fallback={
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
        }
      >
        <NavbarAfter matches={matches} />
        <PostJobs/>
        <Footer />
      </Suspense>
    </>
  );
};

export default PostJobsPg;
