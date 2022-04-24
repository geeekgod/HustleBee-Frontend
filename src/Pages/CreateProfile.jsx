import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const CreateProfileForm = React.lazy(() =>
import("../Components/CreateProfileForm/")
);

const CreateProfile = () => {
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
        <CreateProfileForm />
      </Suspense>
    </>
  );
};

export default CreateProfile;
