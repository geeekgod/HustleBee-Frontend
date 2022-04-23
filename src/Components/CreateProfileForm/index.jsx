import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import BadgeIcon from "@mui/icons-material/Badge";
import { DataContext } from "../../context/DataContext";
const CreateProfileForm = () => {
  const [role, setRole] = useState("Candidate");
  const { user, createProfile } = useContext(DataContext);
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");

  const _handleSubmit = (e) => {
    e.preventDefault();
    createProfile(role, location, position);
  };
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
            <Typography component="h2" variant="h6">
              COMPLETE YOUR PROFILE
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }} component="form" onSubmit={_handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  disabled
                  name="name"
                  label="Name"
                  fullWidth
                  value={user && user.name}
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  id="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  disabled
                  fullWidth
                  value={user && user.email}
                  name="email"
                  label="email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  id="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel className="role" id="role">
                    What suits you the most
                  </InputLabel>
                  <Select
                    labelId="role"
                    id="role"
                    value={role}
                    label="What suits you the most"
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <MenuItem value="Candidate">Candidate</MenuItem>
                    <MenuItem value="Employer">Employer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  placeholder="Enter your Location"
                  label="Enter your Location"
                  type="text"
                  minLength={"4"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddLocationIcon />
                      </InputAdornment>
                    ),
                  }}
                  id="location"
                  autoComplete="location"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  placeholder={
                    role === "Candidate"
                      ? "What position you are interested to apply"
                      : "What is your position"
                  }
                  fullWidth
                  name="position"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                  label={
                    role === "Candidate"
                      ? "Enter your interested position"
                      : "Enter your current position"
                  }
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeIcon />
                      </InputAdornment>
                    ),
                  }}
                  id="position"
                  autoComplete="position"
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" disableElevation type="submit">
                  Create Profile
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CreateProfileForm;
