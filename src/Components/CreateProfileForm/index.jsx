import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
const CreateProfileForm = () => {
  const [role, setRole] = useState("");
  return (
    <>
      <Box>
        <Container sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component='h2' variant='h5'>
              COMPLETE YOUR PROFILE
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  required
                  disabled
                  defaultValue='asla aMSKASKA al'
                  name='name'
                  label='Name'
                  fullWidth
                  type='text'
                  id='name'
                  autoComplete='name'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  required
                  disabled
                  fullWidth
                  defaultValue='SSSSSNDKD@gmail.com'
                  name='email'
                  label='email'
                  type='email'
                  id='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl  fullWidth>
              <InputLabel id='role'>ROLE</InputLabel>
              <Select labelId='role'
              id='role'
               value='role'
              
          
              
                label='role'>
                <MenuItem value=''>Candidate</MenuItem>
                <MenuItem value=''>Employer</MenuItem>
              </Select>
            </FormControl>
              </Grid>
            </Grid>

          
          </Box>

          <TextField
            margin='normal'
            required
            fullWidth
            name='location'
            label='Location'
            type='location'
            id='location'
            autoComplete='location'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='position'
            label='position'
            type='position'
            id='position'
            autoComplete='position'
          />
        </Container>
      </Box>
    </>
  );
};

export default CreateProfileForm;
