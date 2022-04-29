import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as Rlink } from "react-router-dom";

const data = [
  {
    name: "Rishabhkumar Singh",
    img: "/static/img/rishabh.jpg",
    position: "Full-Stack Developer",
    linkedIn: "https://www.linkedin.com/in/rishabhh-singh/",
    gitHub: "https://github.com/thisisrishabh22",
  },
  {
    name: "Shreya Shet",
    img: "/static/img/shreya.jpeg",
    position: "Front-End Developer",
    linkedIn: "https://www.linkedin.com/in/shreyaa-shet/",
    gitHub: "https://github.com/shreyaaashet",
  },
  {
    name: "Aditi Thakre",
    img: "/static/img/aditi.jpeg",
    position: "Back-End Developer",
    linkedIn: "https://www.linkedin.com/in/aditi-thakre-3554a0221/",
    gitHub: "https://github.com/AditiThakre05",
  },
];

const Aboutus = () => {
  document.title = "About US | HustleBee";
  return (
    <Box sx={{ pt: 2, pb: 4 }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ mt: 2, mb: 2, textAlign: "center" }}
        >
          About US
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ mt: 2, mb: 6, textAlign: "center", color: "rgba(0,0,0,0.7)" }}
        >
          We are a team of developers responsible for the development and the
          nourishment of this platform
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: "center", mb: 8 }}>
          {data &&
            data.map((item, index) => (
              <Grid
                item
                key={index}
                md={4}
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <>
                  <Box
                    sx={{
                      width: 200,
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      py: 3,
                      px: 4,
                      borderRadius: 5,
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{
                          width: "100%",
                          borderRadius: "50%",
                          height: "200px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography>{item.position}</Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <a href={item.linkedIn}>
                        <LinkedInIcon sx={{ transform: "scale(1.2)", mx: 1 }} />
                      </a>
                      <a href={item.gitHub}>
                        <GitHubIcon sx={{ transform: "scale(1.)", mx: 1 }} />
                      </a>
                    </Box>
                  </Box>
                </>
              </Grid>
            ))}
        </Grid>
        <Box sx={{ p: 2 }}>
          <Rlink
            style={{
              marginTop: "10px",
              padding: 2,
              color: "#2667FF",
              textDecoration: "underline",
            }}
            to="/"
          >
            Go back
          </Rlink>
        </Box>
      </Container>
    </Box>
  );
};

export default Aboutus;
