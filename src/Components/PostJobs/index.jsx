import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { DataContext } from "../../context/DataContext";
const PostJobs = () => {
  const { postJob } = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [industryCategory, setIndustryCategory] = useState("");
  const categoryList = ["Full Time", "Part Time", "Internship", "Freelance"];
  const typeList = [
    "WFO (Work from Office)",
    "WFH (Work from Home",
    "Hybrid (WFO + WFH)",
  ];
  const industryCategoryList = [
    " .Net Development",
    " Algorithms",
    " Analytics",
    " Artificial Intelligence",
    " Augmented Reality",
    " Backend Development",
    " Big Data",
    " Blockchain",
    " BPO",
    " Business Analyst",
    " Business Development",
    " Business Intelligence",
    " C++ Developer",
    " Cloud",
    " Consulting",
    " Content Writing",
    " Customer Support",
    " Data Entry",
    " Data Science",
    " Database",
    " DevOps",
    " Digital Marketing",
    " EdTech",
    " Energy &amp; Power",
    " Finance",
    " FinTech",
    " Frontend Development",
    " Graphic Designer",
    " Hardware Engineering",
    " Healthcare Tech",
    " Human Resources",
    " Java Developer",
    " Legal",
    " Machine Learning",
    " Mathematics",
    " Mobile Development",
    " Office Boys",
    " Operations",
    " Oracle",
    " Product Management",
    " QA Engineer",
    " Robotics",
    " Sales &amp; Marketing",
    " SAP",
    " Security",
    " Server Admin",
    " Software Programming",
    " Transportation Tech",
    " UI Developer",
    " UI/UX Designer",
    " Videos",
    " Virtual Reality",
    " Web Technologies",
  ];

  const _handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      content: content,
      salary: salary,
      experience: experience,
      location: location,
      category: category,
      type: type,
      industry_category: industryCategory,
    };

    postJob(data);
  };
  return (
    <>
      <Box sx={{ pb: 20 }}>
        <Container sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="h2" variant="h6">
              Post A Job
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }} component="form" onSubmit={_handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  name="title"
                  label="Job Title"
                  fullWidth
                  value={title}
                  type="text"
                  id="title"
                  autoComplete="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={salary}
                  name="email"
                  label="Job Salary"
                  type="number"
                  id="salary"
                  autoComplete="salary"
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={content}
                  name="text"
                  label="Job description"
                  type="text"
                  multiline
                  rows={6}
                  id="job desc"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth required>
                  <InputLabel className="job_category" id="job_category">
                    Job Category
                  </InputLabel>
                  <Select
                    labelId="category_label"
                    id="category_select"
                    value={category}
                    label="Job Category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    {categoryList &&
                      categoryList.map((i, key) => {
                        return (
                          <MenuItem value={i} key={`${i} ${key}`}>
                            {i}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth required>
                  <InputLabel className="job_type" id="job_type">
                    Job Type
                  </InputLabel>
                  <Select
                    labelId="job_type_label"
                    id="job_type_select"
                    value={type}
                    label="Job Type"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    {typeList &&
                      typeList.map((i, key) => {
                        return (
                          <MenuItem value={i} key={`${i} ${key}`}>
                            {i}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel
                    className="industry_category"
                    id="industry_category"
                  >
                    Job Industry Category
                  </InputLabel>
                  <Select
                    labelId="industry_category_label"
                    id="industry_category_select"
                    value={industryCategory}
                    label="Job Industry Category"
                    onChange={(e) => {
                      setIndustryCategory(e.target.value);
                    }}
                  >
                    {industryCategoryList &&
                      industryCategoryList.map((i, key) => {
                        return (
                          <MenuItem value={i} key={`${i} ${key}`}>
                            {i}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="job location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  placeholder="Enter Job Location"
                  label="Enter Job Location"
                  type="text"
                  id="job location"
                  autoComplete="location"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  placeholder={"Enter Job Experience"}
                  fullWidth
                  name="experience"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  label="Enter Job Experience"
                  type="text"
                  id="experience"
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
                  Save Job
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PostJobs;
