import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomBtn from "../../Components/BeforeLogin/Main/CustomBtn";
import { Link as RLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ImgWrapper, SignInContainer } from "./SignInElements";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import hustleBeeApi from "../../api/hustleBeeApi";

const SignIn = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("800"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errs, setErrs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg("");
    if (!/\S+@\S+\.\S+/.test(email.trim()) || password.trim().length < 8) {
      setErrs(true);
    } else {
      setErrs(false);
    }
    if (!errs && submitted) {
      setSubmitted(false);
    }
  }, [email, password]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!errs) {
      console.log({ email: email, password: password });
      hustleBeeApi
        .post("/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.msg) {
            setMsg(res.data.msg);
          }
          setSubmitted(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitted(false);
        });
    }
  };

  return (
    <>
      <Box id="signin">
        <SignInContainer>
          <ImgWrapper>
            <img
              src="static/img/login.png"
              style={{ width: "60%" }}
              alt="Sign In"
            />
            <h1>Welcome Back</h1>
          </ImgWrapper>

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
                <AccountCircleOutlinedIcon
                  style={{ fontSize: "4rem", color: "#2667FF" }}
                />
                <Typography component="h2" variant="h5">
                  Sign to your account
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
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={submitted && !/\S+@\S+\.\S+/.test(email.trim())}
                    helperText={
                      submitted && !/\S+@\S+\.\S+/.test(email.trim())
                        ? "Enter valid email address"
                        : null
                    }
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
                    error={submitted && password.trim().length < 8}
                    helperText={
                      submitted && password.trim().length < 8
                        ? "Enter valid password"
                        : null
                    }
                  />
                  {submitted && errs ? (
                    <Alert severity="error">
                      Please check your fields carefully.
                    </Alert>
                  ) : null}
                  {msg && msg === "Password Incorrect" ? (
                    <Alert severity="error">
                      You have entered wrong password!
                    </Alert>
                  ) : null}
                  {msg && msg === "Not Registered" ? (
                    <Alert severity="error">You have not registered yet!</Alert>
                  ) : null}
                  {msg && msg === "Login Succeeded!" ? (
                    <Alert severity="success">Login Successful!</Alert>
                  ) : null}
                  <CustomBtn type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                    {submitted && !errs ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Sign In"
                    )}
                  </CustomBtn>

                  <Grid container sx={{ paddingTop: 2 }}>
                    <Grid item>
                      <RLink
                        to="/signup"
                        style={{
                          color: useTheme().palette.primary.main,
                          textDecoration: "revert",
                        }}
                      >
                        {"Don't have an account? Sign Up"}
                      </RLink>
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
