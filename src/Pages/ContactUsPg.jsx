import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, Suspense } from "react";
const Contactus = React.lazy(() => import("../Components/Contactus"));

const ContactUsPg = ({ matches }) => {
    document.title = "Contact US | Hustle Bee"
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
        <Contactus />
      </Suspense>
    </>
  );
};

export default memo(ContactUsPg);
