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
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            <ListItemText>Browse Jobs</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon sx={{ px: 5 }}>
            {profile.role === "Candidate" ? (
              <ListItemText>My Applied Jobs</ListItemText>
            ) : (
              <ListItemText>My Posted Jobs</ListItemText>
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
