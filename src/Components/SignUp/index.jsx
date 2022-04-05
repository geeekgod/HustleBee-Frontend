import { Box } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomBtn from "../../Components/BeforeLogin/Main/CustomBtn";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { ImgWrapper, SignUpContainer } from "./SignUpElements";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link as RLink } from "react-router-dom";

const SignUp = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("800"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: email, password: password });
  };

  return (
    <>
      <Box id="signup">
        <SignUpContainer>
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              width: matches ? "100%" : "50%",
              alignItems: "center",
            }}
          >
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
                <LockOpenIcon
                  style={{ fontSize: "4rem", color: "#2667FF" }}
                />
                <Typography component="h2" variant="h5">
                  Create a new account
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1, padding: 1 }}
                  onSubmit={_handleSubmit}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                    Register
                  </CustomBtn>

                  <Grid container sx={{ paddingTop: 2 }}>
                    <Grid item>
                      <RLink
                        to="/signin"
                        style={{
                          color: theme.palette.primary.main,
                          textDecoration: "revert",
                        }}
                      >
                        {"Already have an account? Sign In"}
                      </RLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Grid>
          <ImgWrapper>
            <img
              src="static/img/signup.png"
              style={{ width: "60%" }}
              alt="Sign Up"
            />
            <h1>Create a new account</h1>
          </ImgWrapper>
        </SignUpContainer>
      </Box>
    </>
  );
};

export default SignUp;
