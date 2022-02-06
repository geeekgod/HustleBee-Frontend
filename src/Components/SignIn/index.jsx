import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomBtn from "../../Components/BeforeLogin/Main/CustomBtn";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { ImgWrapper, SignInContainer } from "./SignInElements";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
  };

  return (
    <>
      <Box id="signin">
        <SignInContainer>
          <ImgWrapper>
            <img
              src="static/img/login.png"
              style={{ width: "60%" }}
              alt="Sign In image"
            />
            <h1>Welcome Back</h1>
          </ImgWrapper>

          <Grid
            item
            md={6}
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding: "0 50px",
                marginBottom: 2,
                marginTop: 2,
              }}
            >
              <p style={{ marginRight: 20 }}>Don't have an Account</p>
              <CustomBtn sx={{ mt: 3, mb: 2 }}>Register</CustomBtn>
            </Box>
            <Container
              component="main"
              maxWidth="xs"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <AccountCircleOutlinedIcon
                  style={{ fontSize: "4rem", color: "#2667FF" }}
                />
                <Typography component="h2" variant="h5">
                  Sign to your account
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1, padding: 1 }} onSubmit={_handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={"password"}
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <CustomBtn type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                    Sign In
                  </CustomBtn>

                  <Grid container sx={{ paddingTop: 2 }}>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        {"Forgot Password"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Grid>
          {/* </Box> */}
        </SignInContainer>
      </Box>
    </>
  );
};

export default SignIn;
