import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ImgWrapper, SignInContainer } from "./SignInElements";
import ValidationsignIn from "./ValidationsignIn";
const SignIn = () => {
  const [emailNum, setEmailNum] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: emailNum, password: password });

    setError(ValidationsignIn(emailNum, password));
  };

  const [error, setError] = useState({});
  return (
    <>
      <Box id='signin'>
        <SignInContainer>
          <ImgWrapper>
            <img src='static/img/login.png' style={{ width: "70%" }} alt='' />
            <h1>Welcome Back</h1>
          </ImgWrapper>

          <Grid item md={6} sx={{ justifyContent: "center", margin: "auto" }}>
            <Container component='main' maxWidth='xs'>
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
                <Typography component='h2' variant='h5'>
                  Sign to your account
                </Typography>
                <Box
                  component='form'
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, padding: 1 }}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    value={emailNum}
                    onChange={(e) => setEmailNum(e.target.value)}
                    autoComplete='email'
                    autoFocus
                  />
                  {error.emailNum && error.emailNum}
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    autoComplete='password'
                  />
                  {error.password && error.password}
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    disableElevation
                  >
                    Sign In
                  </Button>

                  <Grid container sx={{ paddingTop: 2 }}>
                    <Grid item xs>
                      <Link href='#' variant='body2'>
                        {"Forgot Password"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href='#' variant='body2'>
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
