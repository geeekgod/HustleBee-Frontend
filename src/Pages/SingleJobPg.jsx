import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
const NavbarAfter = React.lazy(() =>
  import("../Components/BeforeLogin/Navbar/NavbarAfter")
);
const JobDetails = React.lazy(() => import("../Components/Jobs/JobDetails"));
const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer"));

const SingleJobPg = ({matches}) => {
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
        <JobDetails />
        <Footer />
      </Suspense>
    </>
  );
};

export default SingleJobPg;
