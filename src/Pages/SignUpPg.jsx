import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
const SignUp = React.lazy(() => import("../Components/SignUp"));

const SignUpPg = () => {
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
        <SignUp />
      </Suspense>
    </>
  );
};

export default SignUpPg;
