import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { JobBox ,Boxi} from "./JobsElements";

const Jobs = () => {
  return (
    <>
      <Boxi className='job-body'>
        <Container sx={{ mt: 4 }}>
          <Box>
            <Typography>Find Jobs</Typography>
          </Box>
          {/* job cards  */}
          <Box>
            <JobBox>heyyyyy</JobBox>
          </Box>
        </Container>
      </Boxi>
    </>
  );
};

export default Jobs;
