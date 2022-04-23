import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import BadgeIcon from "@mui/icons-material/Badge";
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  id='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel className='role' id='role'>
                    Role
                  </InputLabel>
                  <Select labelId='role' id='role' value='role' label='role'>
                    <MenuItem value=''>Candidate</MenuItem>
                    <MenuItem value=''>Employer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='location'
                  label='Location'
                  type='location'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AddLocationIcon />
                      </InputAdornment>
                    ),
                  }}
                  id='location'
                  autoComplete='location'
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin='normal'
                  required
                  placeholder='(What position you want to apply  or what is your position)'
                  fullWidth
                  name='position'
                  label='position'
                  type='position'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <BadgeIcon />
                      </InputAdornment>
                    ),
                  }}
                  id='position'
                  autoComplete='position'
                />
              </Grid>

              <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 SAVE
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CreateProfileForm;
