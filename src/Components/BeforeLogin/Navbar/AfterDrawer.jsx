import React, { useContext } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CustomBtn from "../Main/CustomBtn";
import { AuthContext } from "../../../context/AuthContext";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";
const AfterDrawer = ({ openDrawer, setOpenDrawer }) => {
  const { authSignOut } = useContext(AuthContext);
  const { profile } = useContext(DataContext);
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List>
        <Link to="/">
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon sx={{ px: 5 }}>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/jobs">
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon sx={{ px: 5 }}>
              <ListItemText>Browse Jobs</ListItemText>
            </ListItemIcon>
          </ListItem>
        </Link>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            {profile.role === "Candidate" ? (
              <Link to="/jobs/applied">
              <ListItemText>My Applied Jobs</ListItemText>
            </Link>
            ) : (
              <Link to="/jobs/posted">
                <ListItemText>My Posted Jobs</ListItemText>
              </Link>
            )}
          </ListItemIcon>
        </ListItem>
        {/* buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {profile?.role === "Employer" ? (
            <Box sx={{ marginTop: "20px" }}>
              <Link to="/jobs/post">
                <CustomBtn
                  sx={{
                    width: "80%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Post Jobs
                </CustomBtn>
              </Link>
            </Box>
          ) : null}
          <Box sx={{ marginTop: "20px" }}>
            <CustomBtn
              onClick={() => authSignOut()}
              sx={{
                width: "80%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Sign Out
            </CustomBtn>
          </Box>
        </Box>
      </List>
    </Drawer>
  );
};

export default AfterDrawer;
