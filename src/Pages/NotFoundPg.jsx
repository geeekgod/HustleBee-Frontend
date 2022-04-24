import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const NotFound = React.lazy(() => import("../Components/NotFound/"));

const NotFoundPg = () => {
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
        <NotFound />
      </Suspense>
    </>
  );
};

export default NotFoundPg;
