import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomBtn from "../../Components/BeforeLogin/Main/CustomBtn";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { ImgWrapper, SignUpContainer } from "./SignUpElements";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link as RLink } from "react-router-dom";
import hustleBeeApi from "../../api/hustleBeeApi";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("800"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errs, setErrs] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg] = useState("");

  const { authSuccess } = useContext(AuthContext);

  useEffect(() => {
    setEmail(email.toLowerCase());
    if (
      name.trim().length < 4 ||
      !/\S+@\S+\.\S+/.test(email.trim()) ||
      password.trim().length < 8
    ) {
      setErrs(true);
    } else {
      setErrs(false);
    }

    if (!errs && submitted) {
      setSubmitted(false);
    }
  }, [name, email, password]);

  const _handleSubmit = (e) => {
    setName(name.trim());
    setEmail(email.trim());
    setPassword(password.trim());
    e.preventDefault();
    setSubmitted(true);
    if (!errs) {
      hustleBeeApi
        .post("/register", {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          setMsg(res.data.msg);
          if (res.data.msg === "Login Succeeded!") {
            setTimeout(() => {
              authSuccess(res.data.accessToken);
            }, 2000);
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
                <LockOpenIcon style={{ fontSize: "4rem", color: "#2667FF" }} />
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
                    error={submitted && name.trim().length < 4}
                    helperText={
                      submitted && name.trim().length < 4
                        ? "Enter valid name"
                        : null
                    }
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

                  {msg && msg === "User Already Exist" ? (
                    <Alert severity="error">You are already registered!</Alert>
                  ) : null}
                  {msg && msg === "User added sucessfully" ? (
                    <Alert severity="success">Registration Successful!</Alert>
                  ) : null}

                  <CustomBtn type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                    {submitted && !errs ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Register"
                    )}
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
