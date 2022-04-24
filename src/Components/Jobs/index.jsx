import {
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { DataContext } from "../../context/DataContext";
import CustomBtn from "../BeforeLogin/Main/CustomBtn";
import { useLocation } from "react-router-dom";

const Jobs = ({ data }) => {
  const location = useLocation();
  const { profile, publishJob, unPublishJob } = useContext(DataContext);
  return (
    <>
      <Box className="job-body" sx={{ pb: 10 }}>
        <Container sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {location.pathname === "/jobs/posted" ? (
              <Typography variant="h4">Your Posted Jobs</Typography>
            ) : (
              <Typography variant="h4">Find Jobs</Typography>
            )}
          </Box>

          {/* jobs*/}
          {data &&
            data.map((i, key) => {
              return (
                <Grid className="Box" sx={{ mt: 4 }} item xs={12} key={key}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      borderRadius: 5,
                    }}
                    p={3}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        md={profile?.role === "Employer" ? 10 : 12}
                      >
                        <Box
                          mt={1}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconButton sx={{ fontSize: 40, p: 1 }}>
                              <PersonSearchIcon fontSize="20" />
                            </IconButton>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              ml: 3,
                              width: "100%",
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
                              <Typography variant="subtitle1">
                                {i.title}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                mx: 1,
                              }}
                            >
                              {/* 1 */}
                              <Grid container spacing={1}>
                                <Grid item xs={12} md={4}>
                                  <ListItem>
                                    <ListItemIcon>
                                      <Box mr={0.3}>
                                        <WorkIcon />
                                      </Box>

                                      <ListItemText>
                                        {i.industry_category}
                                      </ListItemText>
                                    </ListItemIcon>
                                  </ListItem>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                  <ListItem>
                                    <ListItemIcon>
                                      <Box mr={0.3}>
                                        <LocationOnIcon />
                                      </Box>

                                      <ListItemText>{i.location}</ListItemText>
                                    </ListItemIcon>
                                  </ListItem>
                                </Grid>
                                <Grid item xs={4} md={4}>
                                  <ListItem>
                                    <ListItemIcon>
                                      <Box mr={0.3}>
                                        <CurrencyRupeeIcon />
                                      </Box>
                                      <ListItemText>{i.salary}</ListItemText>
                                    </ListItemIcon>
                                  </ListItem>
                                </Grid>
                              </Grid>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                ml: 2,
                                mt: 2,
                                mb: 1,
                              }}
                            >
                              <Typography
                                variant="caption"
                                display="block"
                                sx={{
                                  color: "#616161",
                                  backgroundColor: "rgb(251 222 30 / 90%)",
                                  borderRadius: "40px",
                                  px: 1,
                                  mx: 1,
                                }}
                              >
                                {i.category}
                              </Typography>

                              <Typography
                                variant="caption"
                                display="block"
                                sx={{
                                  color: "#616161",
                                  backgroundColor: "rgb(251 222 30 / 90%)",
                                  borderRadius: "40px",
                                  px: 1,
                                  mx: 1,
                                }}
                              >
                                {i.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>

                      {profile?.role === "Employer" &&
                      location.pathname !== "/" ? (
                        <>
                          {location.pathname !== "/jobs" ? (
                            <Grid
                              item
                              xs={12}
                              md={profile?.role === "Employer" ? 2 : 0}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                  mt: 2,
                                }}
                              >
                                <CustomBtn
                                  onClick={() => {
                                    i.published === 1
                                      ? unPublishJob(i._id)
                                      : publishJob(i._id);
                                  }}
                                >
                                  {i.published === 1 ? "UnPublish" : "Publish"}
                                </CustomBtn>
                              </Box>
                            </Grid>
                          ) : null}
                        </>
                      ) : null}
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
        </Container>
      </Box>
    </>
  );
};

export default Jobs;
