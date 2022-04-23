import {
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const Jobs = () => {
  return (
    <>
      <Box className='job-body'>
        <Container sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant='h4'>Find Jobs</Typography>
          </Box>

          {/* jobs*/}
          <Grid className='Box' sx={{ mt: 4 }} item xs={12}>
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }} p={3}>
              <Box mt={1} sx={{ display: "flex", flexDirection: "row" }}>
                {/* icon */}
                <IconButton sx={{ fontSize:50 }}>
                  <WorkspacesIcon/>
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "center",
                      mx: 3,
                      py: 1,
                    }}
                  >
                    <Typography variant='subtitle1'>ROLE</Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "row", mx: 1 }}>
                    {/* 1 */}
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={4}>
                        <ListItem>
                          <ListItemIcon>
                            <Box mr={0.3}>
                              <WorkIcon />
                            </Box>

                            <ListItemText>Profession</ListItemText>
                          </ListItemIcon>
                        </ListItem>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <ListItem>
                          <ListItemIcon>
                            <Box mr={0.3}>
                              <LocationOnIcon />
                            </Box>

                            <ListItemText>Location</ListItemText>
                          </ListItemIcon>
                        </ListItem>
                      </Grid>
                      <Grid item xs={4} sm={4}>
                        <ListItem>
                          <ListItemIcon>
                            <Box mr={0.3}>
                              <CurrencyRupeeIcon />
                            </Box>
                            <ListItemText>Salary</ListItemText>
                          </ListItemIcon>
                        </ListItem>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "row", ml: 2 }}>
                    <Typography
                      variant='caption'
                      display='block'
                      sx={{
                        color: "#616161",
                        backgroundColor: "rgb(251 222 30 / 90%)",
                        borderRadius: "40px",
                        px: 1,
                        mx: 1,
                      }}
                    >
                      Full-time
                    </Typography>

                    <Typography
                      variant='caption'
                      display='block'
                      sx={{
                        color: "#616161",
                        backgroundColor: "rgb(251 222 30 / 90%)",
                        borderRadius: "40px",
                        px: 1,
                        mx: 1,
                      }}
                    >
                      Location
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* <Pagination count={10} variant="outlined" color="#2667FF" /> */}
    </>
  );
};

export default Jobs;
