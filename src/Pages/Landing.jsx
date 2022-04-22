import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, Suspense } from "react";
import { beforeHomeObj } from "../Components/BeforeLogin/LandingPg/Data";
const LandingPg = React.lazy(() =>
  import("../Components/BeforeLogin/LandingPg")
);
const NavbarBefore = React.lazy(() =>
  import("../Components/BeforeLogin/Navbar/NavbarBefore")
);

const Categories = React.lazy(() =>
  import("../Components/BeforeLogin/Categories")
);
const LandingCTA = React.lazy(() =>
  import("../Components/BeforeLogin/LandingCTA")
);
const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer"));

const Landing = ({ matches }) => {
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
        <NavbarBefore matches={matches} />
        <LandingPg {...beforeHomeObj} />
        <Categories />
        <LandingCTA />
        <Footer />
      </Suspense>
    </>
  );
};

export default memo(Landing);
