import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense, useContext } from "react";
import { DataContext } from "../context/DataContext";
const NavbarAfter = React.lazy(() =>
  import("../Components/BeforeLogin/Navbar/NavbarAfter")
);
const Jobs = React.lazy(() => import("../Components/Jobs"));
const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer/"));

const AppliedJobs = ({ matches }) => {
  const { myAppliedJobs } = useContext(DataContext);
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
        <Jobs data={myAppliedJobs} />
        <Footer />
      </Suspense>
    </>
  );
};

export default React.memo(AppliedJobs);
