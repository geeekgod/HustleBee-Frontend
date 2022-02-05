import { Box } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <>
      <Box id="signin">
        <div style={{ display: "flex", height: "100vh" }}>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#2667FF",
              flexDirection: "column",
              color: "#fff",
            }}
          >
            <img src="static/img/login.png" style={{ width: "70%" }} alt="" />
            <h1>Welcome Back</h1>
          </div>
          <div></div>
        </div>
      </Box>
    </>
  );
};

export default SignIn;
