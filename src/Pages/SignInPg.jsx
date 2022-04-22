import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const SignIn = React.lazy(() => import("../Components/SignIn"))

const SignInPg = () => {
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
        <SignIn />
      </Suspense>
    </>
  );
};

export default SignInPg;
