import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomBtn from "../../Components/BeforeLogin/Main/CustomBtn";
import emailjs from "emailjs-com";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {SignInContainer } from "../SignIn/SignInElements";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { ContactUswrapper } from "./ContactusElements";

const ContactUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("800"));
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errs, setErrs] = useState(false);
  const [message, setMessage] = useState("");
  const [msg,setMsg]=useState("");

  useEffect(() => {
    setMsg("");
    if (!/\S+@\S+\.\S+/.test(email.trim())||message.trim().length < 5) {
      setErrs(true);
    } else {
      setErrs(false);
    }
    if (!errs && submitted) {
      setSubmitted(false);
    }
  }, [email,message, errs, submitted]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!errs) {
        emailjs.sendForm('gmail', 'template_t3zl56g',e.target, 'ZtFHM7VqW-A6lzmlt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
     
    }
    e.target.reset()
  };

  return (
    <>
      <Box id='contactus'>
        <SignInContainer>
          <Grid
            sx={{
              display: "flex",
              height: "100%",
              width: matches ? "100%" : "50%",
              alignItems: "center",
            }}
          >
            <Container
              component='main'
              maxWidth='xs'
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
                <Typography component='h2' variant='h4'>
                  Contact Us
                </Typography>
                <Box
                  component='form'
                  noValidate
                  sx={{ mt: 1, padding: 1 }}
                  onSubmit={_handleSubmit}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
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
                    id='message'
                    placeholder='Enter Your Message (Must be more than 5 characters)'
                    multiline
                    margin='normal'
                    name='message'
                    label='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={submitted && message.trim().length < 5}
                    fullWidth
                    helperText={
                      submitted && message.trim().length < 5
                        ? "Please enter more than 5+ characters"
                        : null
                    }
                  />
                  {submitted && errs ? (
                    <Alert severity='error'>
                      Please check your fields carefully.
                    </Alert>
                  ) : null}

                  {msg && msg === "Login Succeeded!" ? (
                    <Alert severity='success'>Login Successful!</Alert>
                  ) : null}
                  <CustomBtn type='submit' fullWidth sx={{ mt: 3, mb: 2 }}>
                    {submitted && !errs ? (
                      <CircularProgress size={24} color='inherit' />
                    ) : (
                      "Submit"
                    )}
                  </CustomBtn>
                </Box>
              </Box>
            </Container>
          </Grid>
          {/* </Box> */}
          <ContactUswrapper>
            <img
              src='/static/img/Contactus-amico.png'
              style={{ width: "60%" }}
              alt='Contact Us'
            />
          </ContactUswrapper>
        </SignInContainer>
      </Box>
    </>
  );
};

export default ContactUs;
