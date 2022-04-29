import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, Suspense } from "react";
const Aboutus = React.lazy(() => import("../Components/Aboutus"));

const AboutUsPg = ({ matches }) => {
    document.title = "About US | Hustle Bee"
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
        <Aboutus />
      </Suspense>
    </>
  );
};

export default memo(AboutUsPg);
