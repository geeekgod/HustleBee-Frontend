import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
import Footer from "../Components/BeforeLogin/Footer";
import NavbarAfter from "../Components/BeforeLogin/Navbar/NavbarAfter";
const Jobs = React.lazy(() => import("../Components/Jobs"));

const ListJobs = ({ matches }) => {
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
        <Jobs />
        <Footer />
      </Suspense>
    </>
  );
};

export default ListJobs;
