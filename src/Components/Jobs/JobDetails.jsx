import {
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import CustomBtn from "../BeforeLogin/Main/CustomBtn";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const JobDetails = () => {
  const { jobs, profile, user, applyForJob } = useContext(DataContext);
  const [job, setJob] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (profile) {
      if (params?.slug && jobs) {
        let newJob = jobs.find((e) => e._id.includes(params.slug));
        setJob(newJob);
      }
    }
  }, [params]);

  return (
    <div>
      <Box sx={{ pt: 5, pb: 6 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Job Details
        </Typography>
        {job ? (
          <Box sx={{ pl: 2, pr: 2 }}>
            <Grid container>
              <Grid item xs={12} md={profile?.role === "Candidate" ? 10 : 12}>
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
                      <Typography variant="h5">{job.title}</Typography>
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
                                {job.industry_category}
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

                              <ListItemText>{job.location}</ListItemText>
                            </ListItemIcon>
                          </ListItem>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <ListItem>
                            <ListItemIcon>
                              <Box mr={0.3}>
                                <CurrencyRupeeIcon />
                              </Box>
                              <ListItemText>{job.salary}/mo</ListItemText>
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
                      <Grid container sx={{ justifyContent: "flex-start" }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#616161",
                            backgroundColor: "rgb(251 222 30 / 90%)",
                            borderRadius: "40px",
                            px: 1.3,
                            py: 0.5,
                            mx: 1,
                            my: 1,
                          }}
                        >
                          {job.category}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            color: "#616161",
                            backgroundColor: "rgb(251 222 30 / 90%)",
                            borderRadius: "40px",
                            px: 1.3,
                            py: 0.5,
                            mx: 1,
                            my: 1,
                          }}
                        >
                          {job.location}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            color: "#616161",
                            backgroundColor: "rgb(251 222 30 / 90%)",
                            borderRadius: "40px",
                            px: 1.3,
                            py: 0.5,
                            mx: 1,
                            my: 1,
                          }}
                        >
                          Work type: {job.type}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            color: "#616161",
                            backgroundColor: "rgb(251 222 30 / 90%)",
                            borderRadius: "40px",
                            px: 1.3,
                            py: 0.5,
                            mx: 1,
                            my: 1,
                          }}
                        >
                          Industry: {job.industry_category}
                        </Typography>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {profile?.role === "Candidate" ? (
                <>
                  <Grid item xs={12} md={profile?.role === "Candidate" ? 2 : 0}>
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
                        disabled={job.applicants.includes(user.email)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!job.applicants.includes(user.email)) {
                            applyForJob(job._id);
                          }
                        }}
                      >
                        {job.applicants.includes(user.email)
                          ? "Applied for job"
                          : "Apply for job"}
                      </CustomBtn>
                    </Box>
                  </Grid>
                </>
              ) : null}
            </Grid>
            <Container sx={{ mt: 5, pb: 3 }}>
              <Typography variant="h6" display="block" sx={{ pb: 3 }}>
                {job.category}
              </Typography>
              <Typography variant="body1">{job.content}</Typography>
              <Box>
                {profile.role === "Employer" ? (
                  <>
                    <Typography
                      variant="h6"
                      display="block"
                      sx={{ pt: 3, pb: 1 }}
                    >
                      Applied Candidates
                    </Typography>
                    {job.applicants &&
                      job.applicants.map((e, key) => {
                        return (
                          <a href={`mailto:${e}`} key={e + key}>
                            <Typography variant="body2" display="block">
                              {`${key + 1} : ${e} [Click to send mail]`}
                            </Typography>
                          </a>
                        );
                      })}
                  </>
                ) : null}
              </Box>
            </Container>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default JobDetails;
