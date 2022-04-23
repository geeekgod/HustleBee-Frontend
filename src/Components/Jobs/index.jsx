import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { JobBox } from "./JobsElements";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Jobs = () => {
  return (
    <>
      <Box className='job-body'>
        <Container sx={{ mt: 4 }}>
          <Box>
            <Typography>Find Jobs</Typography>
          </Box>
          {/* job cards  */}
          <Box>
            <JobBox>
              <Box mx={3}>
                <AccountBoxIcon />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <Box>
                  <Typography>Role</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography sx={{ mr: 1 }}>Role</Typography>
                  <Typography>Role</Typography>
                  <Typography>Role</Typography>
                </Box>
              </Box>
              <Box></Box>
            </JobBox>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Jobs;
