import React from "react";
import {
  // Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      anchor="left"
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
            <ListItemText>Contact</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
